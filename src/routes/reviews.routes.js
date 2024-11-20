import { Router } from 'express'
import {
    createReviewsController,
    deleteReviewsController,
    getAllReviewsController,
    getByIdReviewsController,
    updateReviewsController,
} from '../controllers/index.js'
import { validateSchema } from '../middlewares/data.middleware.js'
import { reviewsSchema } from '../validations/reviews.schema.js'
import { authGuard } from '../middlewares/guard/auth.guard.js'

export const reviewsRouter = Router()

reviewsRouter.get('/all', authGuard, getAllReviewsController)
reviewsRouter.get('/all/:id', authGuard, getByIdReviewsController)
reviewsRouter.post(
    '/create',
    authGuard,
    validateSchema(reviewsSchema),
    createReviewsController,
)
reviewsRouter.post('/update/:id', authGuard, updateReviewsController)
reviewsRouter.get('/delete/:id', authGuard, deleteReviewsController)
