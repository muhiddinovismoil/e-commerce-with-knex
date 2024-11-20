import { Router } from 'express'
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
} from '../controllers/index.js'
import { authGuard, roleGuard } from '../middlewares/index.js'
import { validateSchema } from '../middlewares/data.middleware.js'
import { categorySchema } from '../validations/category.shema.js'

export const categoryRouter = Router()

categoryRouter.post('/category', authGuard, validateSchema(categorySchema),createCategory)
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
