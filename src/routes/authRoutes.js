import express from "express"
import { loginDoctor, loginUser, registerDoctor, registerUser } from "../controllers/authControllers.js"
import { registerSchema, validate } from "../validations/validators.js"

const authRoutes = express.Router()

authRoutes.post("/register/doctor",validate(registerSchema), registerDoctor)
authRoutes.post("/register/user",validate(registerSchema), registerUser)
authRoutes.post("/login/doctor", loginDoctor)
authRoutes.post("/login/user", loginUser)

export default authRoutes;