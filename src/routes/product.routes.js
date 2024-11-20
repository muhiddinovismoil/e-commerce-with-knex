import { Router } from 'express'
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    updateProduct,
} from '../controllers/index.js'

export const productRouter = Router()

productRouter.post('/product', createProduct)
productRouter.get('/products', getAllProducts)
productRouter.get('/product/:id', getProductById)
productRouter.put('/product/:id', updateProduct)
productRouter.delete('/product/:id', deleteProduct)
