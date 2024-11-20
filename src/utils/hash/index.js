import { genSalt, hash, compare } from 'bcrypt'
const generateSalt = async () => await genSalt(10)
export const hashPassword = async (password) => {
    const salt = await generateSalt()
    return hash(password, salt)
}
export const comparePassword = async (userPassword, password) => {
    return await compare(userPassword, password)
}
