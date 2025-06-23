import express from "express"
import { authCheckUser } from "../middlewares/authCheckMiddlewares.js"
import { createRecords, getRecordById, getRecords, getUser, updateRecord, updateUser } from "../controllers/userControllers.js"

const userRoutes = express.Router()

//Users
userRoutes.get("/me", authCheckUser, getUser)
userRoutes.patch("/me",authCheckUser, updateUser)

//Health Records
userRoutes.post("/health-records",authCheckUser, createRecords)
userRoutes.get("/health-records",authCheckUser, getRecords)
userRoutes.get("/health-records/:id",authCheckUser, getRecordById)
userRoutes.patch("/health-records/:id",authCheckUser, updateRecord)

export default userRoutes