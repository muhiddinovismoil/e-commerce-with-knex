import { Router } from 'express'
import {
    createCartController,
    deleteCartController,
    getAllCartController,
    getByIdCartController,
    updateCartController,
} from '../controllers/index.js'
import { cartScheme } from '../validations/cart.schema.js'
import { authGuard, pagination, validateSchema } from '../middlewares/index.js'

export const cartRouter = Router()

cartRouter.get('/all', authGuard, pagination, getAllCartController)
cartRouter.get('/all/:id', authGuard, getByIdCartController)
cartRouter.post(
    '/create',
    authGuard,
    validateSchema(cartScheme),
    createCartController,
)
cartRouter.put('/update/:id', authGuard, updateCartController)
cartRouter.get('/delete/:id', authGuard, deleteCartController)
