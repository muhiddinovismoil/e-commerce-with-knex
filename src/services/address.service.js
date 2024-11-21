import connectDB from '../database/db.js'
import { logger } from '../utils/index.js'
export const getAllAddressesService = async (pagination) => {
    try {
        const {limit, skip} = pagination
        const data = await connectDB.select('*').from('addresses').offset(skip).limit(limit)
        if (data.length == 0) {
            throw new Error('Address not found')
        }
        return data
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}
export const getAddressByIdService = async (id) => {
    try {
        const data = await connectDB
            .select('*')
            .from('addresses')
            .where('id', id)

        if (!data[0]) {
            throw new Error('Address not found')
        }
        return data[0]
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}
export const createAddressService = async (body) => {
    try {
        const data = await connectDB('addresses')
            .insert({ ...body })
            .returning('*')
        if (!data[0]) {
            throw new Error(
                'Address not found or maybe not created with some reason',
            )
        }
        return data
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}
export const updateAddressByIdService = async (id, body) => {
    try {
        const data = await connectDB('addresses')
            .where('id', id)
            .update({ ...body })
            .returning('*')
        if (!data[0]) {
            throw new Error(
                'Address not found or maybe not updated with some reason',
            )
        }
        return data
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}
export const deleteAddressByIdService = async (id) => {
    try {
        const data = await connectDB('addresses')
            .where('id', id)
            .del()
            .returning('*')
        if (!data[0]) {
            throw new Error(
                'Address not found or maybe not deleted with some reason',
            )
        }
        return data
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}
