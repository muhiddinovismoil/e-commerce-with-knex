import {
    deleteCartService,
    updateCartService,
    getByIdCartService,
    getAllCartService,
    createCartService,
} from '../services/index.js'

export const createCartController = async (req, res, next) => {
    try {
        if (!req.body) {
            return res.status(404).send('NOT FOUND!!!')
        }
        const data = await createCartService(req.body)
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

export const getAllCartController = async (req, res, next) => {
    try {
        const data = await getAllCartService(req.pagination)
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

export const getByIdCartController = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(404).send('id not valid!!!')
        }
        const data = await getByIdCartService(id)
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

export const updateCartController = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id || !req.body) {
            return res.status(404).send('id or body not valid!!!')
        }
        const data = await updateCartService(id, req.body)
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

export const deleteCartController = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(404).send('id not valid!!!')
        }
        const data = await deleteCartService(id)
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
