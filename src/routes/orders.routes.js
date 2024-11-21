import { Router } from 'express'

import { authGuard, pagination, validateSchema } from '../middlewares/index.js'
import {
    createOrdersController,
    deleteOrdersController,
    getAllOrdersController,
    getByIdOrdersController,
} from '../controllers/index.js'
import { ordersSchema } from '../validations/order.schema.js'

export const ordersRouter = Router()

ordersRouter.get('/all', authGuard, pagination, getAllOrdersController)
ordersRouter.get('/all/:id', authGuard, getByIdOrdersController)
ordersRouter.post(
    '/create',
    authGuard,
    validateSchema(ordersSchema),
    createOrdersController,
)
ordersRouter.get('/delete/:id', authGuard, deleteOrdersController)
