import { Router } from 'express'
import {
    createWishlistController,
    deleteWishlistController,
    getAllWishlistController,
    getByIdWishlistController,
} from '../controllers/index.js'
import { authGuard } from '../middlewares/guard/auth.guard.js'
import { validateSchema } from '../middlewares/data.middleware.js'
import { wishlistSchema } from '../validations/wishlist.schema.js'

export const wishlistRouter = Router()

wishlistRouter.get('/all',authGuard, getAllWishlistController)
wishlistRouter.get('/all/:id',authGuard, getByIdWishlistController)
wishlistRouter.post('/create',authGuard,validateSchema(wishlistSchema), createWishlistController)
wishlistRouter.get('/delete/:id',authGuard, deleteWishlistController)
