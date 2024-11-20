import jwt from 'jsonwebtoken'
const { sign, verify } = jwt
import { web } from '../../config/index.js'
export const generateToken = async (prop, payload) => {
    const option = web[prop]

    const token = await sign(payload, option.secret, {
        expiresIn: option.expiresIn,
    })

    return token
}
export const verifyToken = async (prop, token) => {
    try {
        const option = web[prop]

        const result = await verify(token, option.secret)

        return {
            ...result,
            success: true,
        }
    } catch (error) {
        if (error.message === 'invalid token') {
            return {
                success: false,
            }
        }
    }
}
export const refreshAccess = async (prop, token) => {
    try {
        const decoded = jwt.decode(token, { complete: true })
        if (!decoded) {
            throw new Error('Invalid token')
        }
        const { exp, ...payload } = decoded.payload
        const currentTime = Math.floor(Date.now() / 1000)
        if (exp - currentTime < 10) {
            const newToken = await generateToken(prop, payload)
            return {
                success: true,
                newAccessToken: newToken,
            }
        }

        return {
            success: false,
            message: 'Token is still valid',
        }
    } catch (error) {
        return {
            success: false,
            message: error.message,
        }
    }
}
