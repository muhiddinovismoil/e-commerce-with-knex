import {
    createCartItemService,
    deleteCartItemService,
    getAllCartItemsService,
    getCartItemByIdService,
    updateCartItemService,
} from '../services/index.js'

export const createCart = async (req, res, next) => {
    try {
        const result = await createCartItemService({ cartItemData: req.body })
        const { success, error, cartItem } = result
        if (success) {
            return res.status(201).send({ message: 'Created', cartItem })
        } else {
            return res
                .status(400)
                .send({ message: 'Fail', error: error.message })
        }
    } catch (error) {
        next(error)
    }
}

export const getAllCarts = async (req, res, next) => {
    try {
        const result = await getAllCartItemsService()
        const { success, error, cartItems } = result
        if (success) {
            return res
                .status(200)
                .send({ message: 'Completd successfully', cartItems })
        } else {
            return res
                .status(400)
                .send({ message: 'Fail', error: error.message })
        }
    } catch (error) {
        next(error)
    }
}

export const getCartById = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await getCartItemByIdService({ id })
        const { success, error, cartItem } = result
        if (success) {
            return res
                .status(200)
                .send({ message: 'Completd successfully', cartItem })
        } else {
            return res
                .status(404)
                .send({ message: 'Not Found', error: error.message })
        }
    } catch (error) {
        next(error)
    }
}

export const updateCart = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await updateCartItemService({ id, updateData: req.body })
        const { success, error, updatedCartItem } = result
        if (success) {
            return res
                .status(200)
                .send({ message: 'Updated successfully', updatedCartItem })
        } else {
            return res
                .status(400)
                .send({ message: 'Fail', error: error.message })
        }
    } catch (error) {
        next(error)
    }
}

export const deleteCart = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await deleteCartItemService({ id })
        const { success, error } = result
        if (success) {
            return res.status(200).send({ message: 'Deleted successfully' })
        } else {
            return res
                .status(404)
                .send({ message: 'Not Found', error: error.message })
        }
    } catch (error) {
        next(error)
    }
}
