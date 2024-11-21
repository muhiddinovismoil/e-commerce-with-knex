import { Router } from 'express'
import {
    createReviewsController,
    deleteReviewsController,
    getAllReviewsController,
    getByIdReviewsController,
    updateReviewsController,
} from '../controllers/index.js'
import { authGuard, pagination, validateSchema } from '../middlewares/index.js'
import { reviewsSchema } from '../validations/reviews.schema.js'


export const reviewsRouter = Router()

reviewsRouter.get('/all', authGuard, pagination, getAllReviewsController)
reviewsRouter.get('/all/:id', authGuard, getByIdReviewsController)
reviewsRouter.post(
    '/create',
    authGuard,
    validateSchema(reviewsSchema),
    createReviewsController,
)
reviewsRouter.post('/update/:id', authGuard, updateReviewsController)
reviewsRouter.get('/delete/:id', authGuard, deleteReviewsController)
