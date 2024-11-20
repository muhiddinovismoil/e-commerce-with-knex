import { Router } from 'express'
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    updateProduct,
} from '../controllers/index.js'
import { authGuard, roleGuard } from '../middlewares/index.js'

export const productRouter = Router()

productRouter.post('/product', authGuard, createProduct)
productRouter.get('/products', authGuard, roleGuard('admin'), getAllProducts)
productRouter.get('/product/:id', authGuard, getProductById)
productRouter.put('/product/:id', authGuard, roleGuard('admin'), updateProduct)
productRouter.delete(
    '/product/:id',
    authGuard,
    roleGuard('admin'),
    deleteProduct,
)
