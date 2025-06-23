import express from "express"
import { authCheckUser } from "../middlewares/authCheckMiddlewares.js"
import { getUser, updateUser } from "../controllers/userControllers.js"

const userRoutes = express.Router()

userRoutes.get("/me", authCheckUser, getUser)
userRoutes.patch("/me",authCheckUser, updateUser)

export default userRoutes