import { Router } from 'express'
import {
    createReviewsController,
    deleteReviewsController,
    getAllReviewsController,
    getByIdReviewsController,
    updateReviewsController,
} from '../controllers/index.js'

export const reviewsRouter = Router()

reviewsRouter.get('/all', getAllReviewsController)
reviewsRouter.get('/all/:id', getByIdReviewsController)
reviewsRouter.post('/create', createReviewsController)
reviewsRouter.post('/update/:id', updateReviewsController)
reviewsRouter.get('/delete/:id', deleteReviewsController)
