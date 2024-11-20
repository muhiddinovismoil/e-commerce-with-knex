import { Router } from 'express'
import {
    createCartController,
    deleteCartController,
    getAllCartController,
    getByIdCartController,
    updateCartController,
} from '../controllers/index.js'

export const cartRouter = Router()

cartRouter.get('/all', getAllCartController)
cartRouter.get('/all/:id', getByIdCartController)
cartRouter.post('/create', createCartController)
cartRouter.put('/update/:id', updateCartController)
cartRouter.get('/delete/:id', deleteCartController)
