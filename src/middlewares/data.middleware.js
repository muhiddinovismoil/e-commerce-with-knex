export const validateSchema = (schema) => (req, res, next) => {
    try {
        const { error } = schema.validate(req.body)
        if (error) {
            throw new Error({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
