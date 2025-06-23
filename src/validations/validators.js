import { object, ref, Schema, string } from "yup"

export const registerSchema = object({
    username: string().min(8, "Minimum username is 8 characters.").required("Please enter your email."),
    password: string().min(8, "Minimum password is 8 characters.").required("Please enter your password."),
    confirmPassword: string().oneOf([ref("password"), null], "Password doesn't match."),
})

export const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate(req.body, {abortEarly: false})
        next()
    } catch (error) {
        const errMsg = error.errors.map((item) => item)
        const errTxt = errMsg.join(", ");
        const mergeErr = new Error(errTxt)
        next(mergeErr)
    }
}