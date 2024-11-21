import { config } from 'dotenv'
config()
export const web = {
    access: {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: process.env.JWT_ACCESS_TIME,
    },
    refresh: {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: process.env.JWT_REFRESH_TIME,
    },
}
