import { Router } from 'express'
import {
    registerController,
    loginController,
    updateOTPController,
    activateUserController,
    changePasswordController,
} from '../controllers/index.js'
import { authGuard } from '../middlewares/index.js'
export const authRouter = Router()
authRouter.post('/register', registerController)
authRouter.post('/login', loginController)
authRouter.put('/activate', authGuard, activateUserController)
authRouter.post('/updateOTP', updateOTPController)
authRouter.post('/forget-password', changePasswordController)
