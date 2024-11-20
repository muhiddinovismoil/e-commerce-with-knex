import { Router } from 'express'
import {
    createCartItem,
    deleteCartItem,
    getAllCartItems,
    getCartItemById,
    updateCartItem,
} from '../controllers/index.js'
import { authGuard, roleGuard } from '../middlewares/index.js'
import { validateSchema } from '../middlewares/data.middleware.js'
import { cardItemSchema } from '../validations/cardItem.schema.js'

export const cardItemRouter = Router()

cardItemRouter.post('/caritem', authGuard,validateSchema(cardItemSchema), createCartItem)
cardItemRouter.get('/carditems', authGuard, roleGuard('admin'), getAllCartItems)
cardItemRouter.get('/carditem/:id', authGuard, getCartItemById)
cardItemRouter.put(
    '/carditem/:id',
    authGuard,
    roleGuard('admin'),
    updateCartItem,
)
cardItemRouter.delete(
    '/carditem/:id',
    authGuard,
    roleGuard('admin'),
    deleteCartItem,
)
