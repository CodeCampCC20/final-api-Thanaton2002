const errorMidddleware = (err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Internal Server Error" })
}

export default errorMidddleware