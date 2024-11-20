import {
    createOrderService,
    deleteOrderService,
    getAllOrderService,
    getByIdOrderService,
} from '../services/orders.service.js'

export const createOrdersController = async (req, res, next) => {
    try {
        if (!req.body) {
            return res.status(404).send('NOT FOUND!!!')
        }
        const data = await createOrderService(req.body)
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

export const getAllOrdersController = async (req, res, next) => {
    try {
        const data = await getAllOrderService()
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

export const getByIdOrdersController = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(404).send('id not valid!!!')
        }
        const data = await getByIdOrderService(id)
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

export const deleteOrdersController = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(404).send('id not valid!!!')
        }
        const data = await deleteOrderService(id)
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
