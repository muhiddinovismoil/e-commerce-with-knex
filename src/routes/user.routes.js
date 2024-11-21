import { Router } from 'express'
import {
    getAllUsersController,
    getUserByIdController,
    updateUserByIdController,
    deleteUserByIdController,
} from '../controllers/index.js'
import { userScheme } from '../validations/index.js'
import { authGuard, roleGuard, validateSchema } from '../middlewares/index.js'
export const userRouter = Router()
userRouter.get('/', authGuard, getAllUsersController)
userRouter.get('/:id', authGuard, getUserByIdController)
userRouter.put(
    '/:id',
    validateSchema(userScheme),
    authGuard,
    roleGuard('admin', 'superAdmin'),
    updateUserByIdController,
)
userRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'superAdmin'),
    deleteUserByIdController,
)
