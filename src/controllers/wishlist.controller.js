import {
    createWishlistService,
    deleteWishlistService,
    getAllWishlistService,
    getByIdWishlistService,
} from '../services/index.js'

export const createWishlistController = async (req, res, next) => {
    try {
        if (!req.body) {
            return res.status(404).send('NOT FOUND!!!')
        }
        const data = await createWishlistService(req.body)
        if (!data) {
            return res.send('Service is not provide...')
        }
        return res.status(200).send({
            status: 'ok',
            data: 'Created',
        })
    } catch (error) {
        next(error)
    }
}

export const getAllWishlistController = async (req, res, next) => {
    try {
        const data = await getAllWishlistService(req.pagination)
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

export const getByIdWishlistController = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(404).send('id not valid!!!')
        }
        const data = await getByIdWishlistService(id)
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

export const deleteWishlistController = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(404).send('id not valid!!!')
        }
        const data = await deleteWishlistService(id)
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
