import { Router } from 'express'
import {
    createCartItem,
    deleteCartItem,
    getAllCartItems,
    getCartItemById,
    updateCartItem,
} from '../controllers/index.js'
import { authGuard, roleGuard } from '../middlewares/index.js'

export const cardItemRouter = Router()

cardItemRouter.post('/caritem', authGuard, createCartItem)
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
