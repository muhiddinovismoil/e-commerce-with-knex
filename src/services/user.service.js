import connectDB from '../database/db.js'
import { logger } from '../utils/index.js'
export const getAllUsersService = async () => {
    try {
        const data = await connectDB.select('*').from('users')
        if (data.length == 0) {
            throw new Error('Users not found')
        }
        return data
    } catch (error) {
        logger.error(error.message)
    }
}
export const getUsersByIdService = async (id) => {
    try {
        const data = await connectDB.select('*').from('users').where('id', id)
        if (!data[0]) {
            throw new Error('User not found with this id')
        }
        return data[0]
    } catch (error) {
        logger.error(error.message)
    }
}
export const updateUsersByIdService = async (id, body) => {
    try {
        const data = await connectDB('users')
            .where('id', id)
            .update({ ...body })
            .returning('*')
        if (!data[0]) {
            throw new Error(
                'User not found or maybe not deleted with some reason',
            )
        }
        return data[0]
    } catch (error) {
        logger.error(error.message)
    }
}
export const deleteUsersByIdService = async (id) => {
    try {
        const deleted = await connectDB('users')
            .where('id', id)
            .del()
            .returning('*')
        if (!deleted[0]) {
            throw new Error(
                'User not found or maybe not deleted with some reason',
            )
        }
        return deleted[0]
    } catch (error) {
        logger.error(error.message)
    }
}
