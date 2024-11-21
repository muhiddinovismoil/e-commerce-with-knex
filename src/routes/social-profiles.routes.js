import { Router } from 'express'
import {
    getAllSocialProfilesController,
    getSocialProfileByIdController,
    createSocialProfileController,
    updateSocialProfileByIdController,
    deleteSocialProfileByIdController,
} from '../controllers/index.js'
import { socialProfilesScheme } from '../validations/index.js'
import { authGuard, roleGuard, validateSchema } from '../middlewares/index.js'
export const socialProfilesRouter = Router()
socialProfilesRouter.get('/', authGuard, getAllSocialProfilesController)
socialProfilesRouter.get('/:id', authGuard, getSocialProfileByIdController)
socialProfilesRouter.post(
    '/',
    authGuard,
    validateSchema(socialProfilesScheme),
    createSocialProfileController,
)
socialProfilesRouter.put(
    '/:id',
    authGuard,
    roleGuard('admin', 'superAdmin'),
    updateSocialProfileByIdController,
)
socialProfilesRouter.delete(
    '/:id',
    authGuard,
    roleGuard('admin', 'superAdmin'),
    deleteSocialProfileByIdController,
)
