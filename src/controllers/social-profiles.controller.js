import { logger } from '../utils/index.js'
import {
    getAllSocialProfilesService,
    getSocialProfileByIdService,
    updateSocialProfileByIdService,
    deleteSocialProfileByIdService,
    createSocialProfileService,
} from '../services/index.js'
export const getAllSocialProfilesController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/social-profiles METHOD GET`)
        const data = await getAllSocialProfilesService()
        return res.status(200).send({
            msg: 'ALL SOCIAL PROFILES',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/social-profiles METHOD GET, Error: ${error.message}`,
        )
        next(error)
    }
}
export const getSocialProfileByIdController = async (req, res, next) => {
    try {
        logger.info(
            `Route: /api/v1/social-profiles/${req.params.id} METHOD GET`,
        )
        const data = await getSocialProfileByIdService(req.params.id)
        return res.status(200).send({
            msg: 'SOCIAL PROFILE',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/social-profiles/${req.params.id} METHOD GET, Error: ${error.message}`,
        )
        next(error)
    }
}
export const createSocialProfileController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/social-profiles METHOD POST`)
        const data = await createSocialProfileService(req.body)
        return res.status(200).send({
            msg: 'CREATED',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/social-profiles METHOD POST, Error: ${error.message}`,
        )
        next(error)
    }
}
export const updateSocialProfileByIdController = async (req, res, next) => {
    try {
        logger.info(
            `Route: /api/v1/social-profiles/${req.params.id} METHOD PUT`,
        )
        const data = await updateSocialProfileByIdService(
            req.params.id,
            req.body,
        )
        return res.status(200).send({
            msg: 'UPDATED',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/social-profiles/${req.params.id} METHOD PUT, Error: ${error.message}`,
        )
        next(error)
    }
}
export const deleteSocialProfileByIdController = async (req, res, next) => {
    try {
        logger.info(
            `Route: /api/v1/social-profiles/${req.params.id} METHOD DELETE`,
        )
        const data = await deleteSocialProfileByIdService(
            req.params.id,
            req.body,
        )
        return res.status(200).send({
            msg: 'DELETED',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/social-profiles/${req.params.id} METHOD DELETE, Error: ${error.message}`,
        )
        next(error)
    }
}
