import { Router } from 'express'
import {
    createWishlistController,
    deleteWishlistController,
    getAllWishlistController,
    getByIdWishlistController,
} from '../controllers/index.js'
import { authGuard, pagination, validateSchema } from '../middlewares/index.js'
import { wishlistSchema } from '../validations/wishlist.schema.js'

export const wishlistRouter = Router()

wishlistRouter.get('/all',authGuard, pagination, getAllWishlistController)
wishlistRouter.get('/all/:id',authGuard, getByIdWishlistController)
wishlistRouter.post('/create',authGuard,validateSchema(wishlistSchema), createWishlistController)
wishlistRouter.get('/delete/:id',authGuard, deleteWishlistController)
