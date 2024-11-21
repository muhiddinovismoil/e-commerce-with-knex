import { logger } from '../utils/index.js'
import {
    getAllAddressesService,
    getAddressByIdService,
    createAddressService,
    updateAddressByIdService,
    deleteAddressByIdService,
} from '../services/index.js'
export const getAllAddressesController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/address METHOD GET`)
        const data = await getAllAddressesService()
        return res.status(200).send({
            msg: 'All Addresses',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address METHOD GET, Error: ${error.message}`,
        )
        next(error)
    }
}
export const getAddressByIdController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/address/${req.params.id} METHOD GET`)
        const data = await getAddressByIdService(req.params.id)
        return res.status(200).send({
            msg: 'Address',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address/${req.params.id} METHOD GET, Error: ${error.message}`,
        )
        next(error)
    }
}
export const createAddressController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/address METHOD POST`)
        const data = await createAddressService(req.body)
        return res.status(200).send({
            msg: 'CREATED',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address METHOD POST, Error: ${error.message}`,
        )
        next(error)
    }
}
export const updateAddressByIdController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/address/${req.params.id} METHOD PUT`)
        const data = await updateAddressByIdService(req.params.id, req.body)
        return res.status(200).send({
            msg: 'UPDATED',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address/${req.params.id} METHOD PUT, Error: ${error.message}`,
        )
        next(error)
    }
}
export const deleteAddressByIdController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/address/${req.params.id} METHOD DELETE`)
        const data = await deleteAddressByIdService(req.params.id)
        return res.status(200).send({
            msg: 'DELETED',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/address/${req.params.id} METHOD DELETE, Error: ${error.message}`,
        )
        next(error)
    }
}
