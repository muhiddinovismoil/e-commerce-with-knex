import {
    createReviewsService,
    deleteReviewsService,
    getAllReviewsService,
    getByIdReviewsService,
    updateReviewsService,
} from '../services/index.js'

export const createReviewsController = async (req, res, next) => {
    try {
        if (!req.body) {
            return res.status(404).send('NOT FOUND!!!')
        }
        const data = await createReviewsService(req.body)
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

export const getAllReviewsController = async (req, res, next) => {
    try {
        const data = await getAllReviewsService()
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

export const getByIdReviewsController = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(404).send('id not valid!!!')
        }
        const data = await getByIdReviewsService(id)
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const updateReviewsController = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id || !req.body) {
            return res.status(404).send('id or body not valid!!!')
        }
        const data = await updateReviewsService(id, req.body)
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

export const deleteReviewsController = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(404).send('id not valid!!!')
        }
        const data = await deleteReviewsService(id)
        if (!data) {
            return res.status(404).send('NOT FOUND!!!')
        }
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
