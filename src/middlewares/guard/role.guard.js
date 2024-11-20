export const roleGuard = (...roles) => {
    return async (req, res, next) => {
        try {
            const { role } = req.user
            if (!roles.includes(role)) {
                throw new Error('access deny!')
            }
            next()
        } catch (e) {
            next(e)
        }
    }
}
