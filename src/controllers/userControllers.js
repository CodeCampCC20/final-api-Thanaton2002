import { findUser } from "../services/authServices.js"
import { hashService } from "../services/hashServices.js"
import { findUserById, postRecords, updateUserById } from "../services/userService.js"
import createError from "../utils/createError.js"

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.user
    // console.log('id', id)
    const user = await findUserById(id)
    // console.log('user', user)

    res.json({
      id: user.id,
      username: user.username
    })

  } catch (error) {
    next(error)
  }
}

export const updateUser = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const { id } = req.user

    if (!username || !password) {
      createError(400, "Username or Password is missing.")
    }

    const isExist = await findUser(username)

    if (isExist) {
      createError(400, "Username already exist.")
    }

    const hashPassword = hashService(password)

    console.log('id', id)
    const user = await updateUserById(id, username, hashPassword)
    console.log('user', user)

    res.json({
      id: user.id,
      username: user.username
    })
  } catch (error) {
    next(error)
  }
}

export const createRecords = async (req, res, next) => {
  try {
    const { type, value } = req.body
    const { id } = req.user

    if (!type || !value) {
      createError(400, "Type or Value is missing.")
    }

    const data = {
      type,
      value,
      userId: id
    }

    const result = await postRecords(data)
    console.log('result', result)

    res.json({ "message": "create health record successfully" })
  } catch (error) {
    next(error)
  }
}