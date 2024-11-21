import { Router } from 'express'
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
} from '../controllers/index.js'
import { authGuard, pagination, roleGuard, validateSchema } from '../middlewares/index.js'
import { categorySchema } from '../validations/category.shema.js'

export const categoryRouter = Router()

categoryRouter.post('/category', authGuard, validateSchema(categorySchema),createCategory)
categoryRouter.get(
    '/categories',
    authGuard,
    roleGuard('admin'),
    pagination,
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
