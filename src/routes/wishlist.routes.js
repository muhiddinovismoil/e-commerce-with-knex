import { Router } from 'express'
import {
    createWishlistController,
    deleteWishlistController,
    getAllWishlistController,
    getByIdWishlistController,
} from '../controllers/index.js'

export const wishlistRouter = Router()

wishlistRouter.get('/all', getAllWishlistController)
wishlistRouter.get('/all/:id', getByIdWishlistController)
wishlistRouter.post('/create', createWishlistController)
wishlistRouter.get('/delete/:id', deleteWishlistController)
