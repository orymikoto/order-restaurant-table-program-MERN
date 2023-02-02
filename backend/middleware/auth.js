import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const authentication = async (req, res, next) => {
  const authHeader = req.headers['authorization']
  // console.log(authHeader);
  const token = authHeader && authHeader.split(' ')[1]
  // console.log(token);

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.SECRET, (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}