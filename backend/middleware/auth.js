import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const authentication = async (req, res, next) => {
  const authHeader = req.headers['authorization']
  // console.log(authHeader);
  const token = authHeader && authHeader.split(' ')[1]
  // console.log(token);

  if (token == null) return res.status(401).json({message: 'You are unathorized please login!'})

  jwt.verify(token, process.env.SECRET, (err, user) => {
    // console.log(err)
    if (err) return res.status(403).json({message: 'You are forbidden to access this content please relogin'})

    req.user = user

    next()
  })
}

export default authentication