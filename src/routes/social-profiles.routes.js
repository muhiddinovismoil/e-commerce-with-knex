import { Router } from 'express'
import {} from '../controllers/index.js'
import { userScheme } from '../validations/index.js'
import { authGuard, roleGuard, validateSchema } from '../middlewares/index.js'
export const socialProfilesRouter = Router()
socialProfilesRouter.get('/')
socialProfilesRouter.get('/:id')
socialProfilesRouter.post('/')
socialProfilesRouter.put('/:id')
socialProfilesRouter.delete('/:id')
