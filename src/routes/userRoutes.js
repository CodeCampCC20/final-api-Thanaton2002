import express from "express"
import { authCheckUser } from "../middlewares/authCheckMiddlewares.js"
import { createRecords, getUser, updateUser } from "../controllers/userControllers.js"

const userRoutes = express.Router()

//Users
userRoutes.get("/me", authCheckUser, getUser)
userRoutes.patch("/me",authCheckUser, updateUser)

//Health Records
userRoutes.post("/health-records",authCheckUser, createRecords)

export default userRoutes