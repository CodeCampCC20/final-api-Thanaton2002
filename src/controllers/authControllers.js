import { compareService, hashService } from "../services/hashServices.js"
import { createDoctor, createUser, findDoctor, findUser } from "../services/authServices.js"
import createError from "../utils/createError.js"
import { signTokenDoctor, signTokenUser } from "../services/jwtservice.js"


export const registerDoctor = async (req, res, next) => {
  try {
    const { username, password, specialization } = req.body

    const isExist = await findDoctor(username)

    if (isExist) { 
      createError(400, "Username already exist.")
    }

    const hashPassword = hashService(password)
    // console.log('hashPassword', hashPassword)

    const result = await createDoctor({
      username,
      password: hashPassword,
      specialization
    })
    // console.log('result', result)
    res.json({ "message": "Register doctor Successfully" })

  } catch (error) {
    next(error)
  }
}

export const registerUser = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const isExist = await findUser(username)

    if (isExist) { 
      createError(400, "Username already exist.")
    }

    const hashPassword = hashService(password)
    console.log('hashPassword', hashPassword)

    const result = await createUser({
      username,
      password: hashPassword,
    })
    console.log('result', result)

    res.json({ "message": "Register user Successfully" })

  } catch (error) {
    next(error)
  }
}

export const loginDoctor = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = await findDoctor(username)
    console.log('user', user)

    if (!user) {
      createError(400, "Username Or Password Invalid.")
    }

    const checkPassword = compareService(password, user.password)
    // console.log('checkPassword', checkPassword)

    if (!checkPassword) {
      createError(400, "Username Or Password Invalid.")
    }

    const payload = {
      id: user.id
    }

    const token = signTokenDoctor(payload)
    // console.log('token', token)

    res.json({
      id: user.id,
      username: user.username,
      specialization: user.specialization,
      accessToken: token
    })

  } catch (error) {
    next(error)
  }
}

export const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = await findUser(username)
    console.log('user', user)

    if (!user) {
      createError(400, "Username Or Password Invalid.")
    }

    const checkPassword = compareService(password, user.password)
    // console.log('checkPassword', checkPassword)

    if (!checkPassword) {
      createError(400, "Username Or Password Invalid.")
    }

    const payload = {
      id: user.id
    }

    const token = signTokenUser(payload)
    // console.log('token', token)

    res.json({
      id: user.id,
      username: user.username,
      accessToken: token
    })

  } catch (error) {
    next(error)
  }
}

