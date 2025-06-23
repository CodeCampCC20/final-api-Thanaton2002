const createError = (errCode, msg) => {
  const error = new Error(msg)
  error.code = errCode
  throw error
}

export default createError