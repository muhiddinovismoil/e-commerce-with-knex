import connectDB from '../database/db.js'
import {
    comparePassword,
    generateOtp,
    generateToken,
    hashPassword,
    logger,
    sendMail,
} from '../utils/index.js'
export const getUserByEmailService = async (email) => {
    try {
        const getUser = await connectDB
            .select('*')
            .from('users')
            .where('email', email)
        return getUser[0]
    } catch (error) {
        logger.error(error)
        return error
    }
}
export const registerUser = async (user) => {
    try {
        const currentUser = await getUserByEmailService(user.email)
        if (currentUser) {
            throw new Error('User email is already in use')
        }
        const otp = generateOtp()
        try {
            await sendMail(
                user.email,
                'OTP',
                `<h1>This is your OTP code: ${otp}. Don't give share it with others !</h1>`,
            )
        } catch (mailError) {
            throw new Error(`Failed to send OTP to email: ${mailError.message}`)
        }
        const hashedPassword = await hashPassword(user.password)
        const [newUser] = await connectDB('users')
            .insert({
                name: user.name,
                email: user.email,
                password: hashedPassword,
                role: user.role || 'user',
                avatar: user.avatar,
                username: user.username,
                birth_of_date: user.birth_of_date,
                phone_number: user.phone_number,
            })
            .returning('*')
        await connectDB('otp_codes').insert({
            user_id: newUser.id,
            otp_code: otp,
        })
        return newUser
    } catch (error) {
        logger.error(error.message)
        return error
    }
}
export const loginUser = async (user) => {
    try {
        const currentUser = await getUserByEmailService(user.email)
        if (!currentUser) {
            throw new Error('User not found')
        }
        const passIsEqual = await comparePassword(
            user.password,
            currentUser.password,
        )
        if (!passIsEqual) {
            throw new Error('User password or email wrong')
        }
        const accessToken = await generateToken('access', {
            sub: currentUser.id,
            email: currentUser.email,
            role: currentUser.role,
            username: currentUser.username,
        })
        const refreshToken = await generateToken('refresh', {
            sub: currentUser.id,
            email: currentUser.email,
            role: currentUser.role,
        })
        return {
            accessToken,
            refreshToken,
        }
    } catch (error) {
        logger.error(error)
        return error
    }
}
export const activateUserService = async (userData) => {
    try {
        const { email } = userData
        const currentUser = await getUserByEmailService(email)
        if (!currentUser) {
            throw new Error(`User not found`)
        }
        const user = await connectDB('users')
            .where('email', email)
            .update({
                is_active: true,
            })
            .returning('*')
        return user
    } catch (error) {
        logger.error(error.message)
        return error
    }
}
export const updateOTPService = async (data) => {
    try {
        const { email } = data
        const currentUser = await getUserByEmailService(email)
        if (!currentUser) {
            throw new Error('User not found')
        }
        const oneTimePassword = generateOtp()
        await sendMail(email, 'OTP', `THIS IS YOUR OTP: ${oneTimePassword}`)
        await connectDB('otp_codes')
            .where('user_id', currentUser.id)
            .update({ otp_code: oneTimePassword })
        return {
            msg: 'New OTP sended to your email',
        }
    } catch (error) {
        logger.error(error)
        return error
    }
}
export const changePasswordService = async (userData) => {
    try {
        const { email, otp, newPassword } = userData
        const currentUser = await getUserByEmailService(email)
        const otpdata = await connectDB
            .select('*')
            .from('otp_codes')
            .where('user_id', currentUser.id)
        if (otpdata[0].otp_code != otp) {
            throw new Error(`Please enter your OTP CODE`)
        }
        const hashedPassword = await hashPassword(newPassword)
        await connectDB('users')
            .where('id', currentUser.id)
            .update({ password: hashedPassword })
        return {
            msg: 'Your password changed successfully',
        }
    } catch (error) {
        logger.error(error)
        return error
    }
}
