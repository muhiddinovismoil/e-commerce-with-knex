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

export const ordersRouter = Router()

ordersRouter.get('/all', authGuard, getAllOrdersController)
ordersRouter.get('/all/:id', authGuard, getByIdOrdersController)
ordersRouter.post(
    '/create',
    authGuard,
    validateSchema(ordersSchema),
    createOrdersController,
)
ordersRouter.get('/delete/:id', authGuard, deleteOrdersController)
