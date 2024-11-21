import connectDB from '../database/db.js'
import { logger } from '../utils/index.js'
export const getAllSocialProfilesService = async () => {
    try {
        const data = await connectDB.select('*').from('social_profiles')
        if (data.length == 0) {
            throw new Error('Social Profiles not found')
        }
        return data
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}
export const getSocialProfileByIdService = async (id) => {
    try {
        const data = await connectDB
            .select('*')
            .from('social_profiles')
            .where('id', id)
        if (!data[0]) {
            throw new Error('Social Profile not found')
        }
        return data[0]
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}
export const createSocialProfileService = async (body) => {
    try {
        const data = await connectDB('social_profiles')
            .insert({ ...body })
            .returning('*')
        if (!data[0]) {
            throw new Error(
                'Social Profiles not found or maybe not created with some reason',
            )
        }
        return data[0]
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}
export const updateSocialProfileByIdService = async (id, body) => {
    try {
        const data = await connectDB('social_profiles')
            .where('id', id)
            .update({ ...body })
            .returning('*')
        if (!data[0]) {
            throw new Error(
                'Social Profiles not found or maybe not updated with some reason',
            )
        }
        return data[0]
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}
export const deleteSocialProfileByIdService = async (id) => {
    try {
        const data = await connectDB('social_profiles')
            .where('id', id)
            .del()
            .returning('*')
        if (!data[0]) {
            throw new Error(
                'Social Profiles not found or maybe not deleted with some reason',
            )
        }
        return data
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}
