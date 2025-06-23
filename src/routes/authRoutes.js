import express from "express"
import { loginDoctor, loginUser, registerDoctor, registerUser } from "../controllers/authControllers.js"

const authRoutes = express.Router()

authRoutes.post("/register/doctor", registerDoctor)
authRoutes.post("/register/user", registerUser)
authRoutes.post("/login/doctor", loginDoctor)
authRoutes.post("/login/user", loginUser)

export default authRoutes;