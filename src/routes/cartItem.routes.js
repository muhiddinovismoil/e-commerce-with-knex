import { Router } from 'express'
import {
    createCart,
    deleteCart,
    getAllCarts,
    getCartById,
    updateCart,
} from '../controllers/index.js'

export const cardItemRouter = Router()

cardItemRouter.post('/card', createCart)
cardItemRouter.get('/cards', getAllCarts)
cardItemRouter.get('/card/:id', getCartById)
cardItemRouter.put('/card/:id', updateCart)
cardItemRouter.delete('/card/:id', deleteCart)
