import { config } from 'dotenv'
config()
export const email = {
    user: process.env.USER_EMAIL,
    pass: process.env.APP_PASSWORD,
}
