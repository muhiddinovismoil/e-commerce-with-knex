import { Router } from 'express'
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
} from '../controllers/index.js'
import { authGuard, roleGuard } from '../middlewares/index.js'

export const categoryRouter = Router()

categoryRouter.post('/category', authGuard, createCategory)
categoryRouter.get(
    '/categories',
    authGuard,
    roleGuard('admin'),
    getAllCategories,
)
categoryRouter.get('/category/:id', authGuard, getCategoryById)
categoryRouter.put(
    '/category/:id',
    authGuard,
    roleGuard('admin'),
    updateCategory,
)
categoryRouter.delete(
    '/category/:id',
    authGuard,
    roleGuard('admin'),
    deleteCategory,
)
