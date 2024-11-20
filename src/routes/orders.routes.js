import { Router } from 'express'

import { authGuard } from '../middlewares/guard/auth.guard.js'
import { validateSchema } from '../middlewares/data.middleware.js'
import {
    createOrdersController,
    deleteOrdersController,
    getAllOrdersController,
    getByIdOrdersController,
} from '../controllers/index.js'
import { ordersSchema } from '../validations/order.schema.js'

export const wishlistRouter = Router()

wishlistRouter.get('/all', authGuard, getAllOrdersController)
wishlistRouter.get('/all/:id', authGuard, getByIdOrdersController)
wishlistRouter.post(
    '/create',
    authGuard,
    validateSchema(ordersSchema),
    createOrdersController,
)
wishlistRouter.get('/delete/:id', authGuard, deleteOrdersController)
