import { logger } from '../utils/index.js'
import {
    getAllUsersService,
    getUsersByIdService,
    updateUsersByIdService,
    deleteUsersByIdService,
} from '../services/index.js'
export const getAllUsersController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/users METHOD GET`)
        const data = await getAllUsersService()
        return res.status(200).send({
            msg: 'All users',
            data: data,
        })
    } catch (error) {
        logger.error(`Route: /api/v1/users METHOD GET,Error: ${error.message}`)
        next(error)
    }
}
export const getUserByIdController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/users/${req.params.id} METHOD GET`)
        const data = await getUsersByIdService(req.params.id)
        return res.status(200).send({
            msg: 'User Data',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/users/${req.params.id} METHOD GET,Error: ${error.message}`,
        )
        next(error)
    }
}
export const updateUserByIdController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/users/${req.params.id} METHOD PUT`)
        const data = await updateUsersByIdService(req.params.id, req.body)
        return res.status(200).send({
            msg: 'User data updated',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/users/${req.params.id} METHOD PUT,Error: ${error.message}`,
        )
        next(error)
    }
}
export const deleteUserByIdController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/users/${req.params.id} METHOD DELETE`)
        const data = await deleteUsersByIdService(req.params.id)
        return res.status(200).send({
            msg: 'DELETE SUCCESS',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/users/${req.params.id} METHOD DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
