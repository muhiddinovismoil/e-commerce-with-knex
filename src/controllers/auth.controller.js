import {
    registerUser,
    loginUser,
    updateOTPService,
    activateUserService,
    changePasswordService,
} from '../services/index.js'
import { logger } from '../utils/index.js'
export const registerController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/auth/register Method: POST`)
        const register = await registerUser(req.body)
        res.status(200).send({
            msg: 'Register',
            data: register,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/register Method: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
export const loginController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/auth/login Method: POST`)
        const login = await loginUser(req.body)
        res.status(200).json({
            accessToken: login.accessToken,
            refreshToken: login.refreshToken,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/login Method: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
export const activateUserController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/auth/activate Method: PUT`)
        const activated = await activateUserService(req.user)
        return res.status(200).send({
            msg: 'User Activated',
            activated,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/activate Method: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}
export const updateOTPController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/auth/updateOTP Method: POST`)
        const newOTP = await updateOTPService(req.body)
        res.status(200).send(newOTP)
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/updateOTP Method: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
export const changePasswordController = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/auth/updateOTP Method: POST`)
        const newPass = await changePasswordService(req.body)
        return res.status(200).send(newPass)
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/updateOTP Method: POST,Error: ${error.message}`,
        )
        next(error)
    }
}
