import { Router } from 'express'
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    updateProduct,
} from '../controllers/index.js'
import { authGuard, pagination, roleGuard, validateSchema } from '../middlewares/index.js'
import { productSchema } from '../validations/product.shema.js'

export const productRouter = Router()

productRouter.post('/product', authGuard, validateSchema(productSchema),createProduct)
productRouter.get('/products', authGuard, roleGuard('admin'), pagination, getAllProducts)
productRouter.get('/product/:id', authGuard, getProductById)
productRouter.put('/product/:id', authGuard, roleGuard('admin'), updateProduct)
productRouter.delete(
    '/product/:id',
    authGuard,
    roleGuard('admin'),
    deleteProduct,
)
