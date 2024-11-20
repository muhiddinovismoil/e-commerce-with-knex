import { Router } from 'express'
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
} from '../controllers/index.js'

export const categoryRouter = Router()

categoryRouter.post('/category', createCategory)
categoryRouter.get('/categories', getAllCategories)
categoryRouter.get('/category/:id', getCategoryById)
categoryRouter.put('/category/:id', updateCategory)
categoryRouter.delete('/category/:id', deleteCategory)
