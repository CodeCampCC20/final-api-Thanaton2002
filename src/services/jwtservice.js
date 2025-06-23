import jwt from "jsonwebtoken"
import createError from "../utils/createError.js"

export const signTokenDoctor = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET_DOCTOR, {
    expiresIn: "1d",
    algorithm: "HS256"
  })
  return token
}

export const signTokenUser = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET_USER, {
    expiresIn: "1d",
    algorithm: "HS256"
  })
  return token
}

