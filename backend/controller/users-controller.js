// Import NPM package
import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()
// Import local package
import user_model from '../data/model/users.js'

// Sign-in / Login function
export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const existing_user = await user_model.findOne({ email: email })

    if(!existing_user){
      return res.status(404).json({message: "User doesn't exist"})
    }
    const is_password_correct = await bcrypt.compare(password, existing_user.password)
    if(!is_password_correct){
      return res.status(400).json({message: "Invalid credentials"})
    }

    const token = jwt.sign({ email: existing_user.email, id: existing_user._id}, process.env.SECRET, { expiresIn: "3h"})
    res.status(200).json({ result: existing_user, token})
  } catch (error) {
    res.status(500).json({ message: "Something went wrong"})
  }
}

// Sign-up / Register function
export const register = async (req, res) => {
  const { name, email, password, confirm_password, address} = req.body
  try {
    const existing_user = await user_model.findOne({ email: email})

    if(existing_user) return res.status(400).json({ message: "User already exist" })
    if(password !== confirm_password) return res.status(400).json({ message: "password don't match" })

    const hashedPassword = await bcrypt.hash(password, 12)
    const result = await user_model.create({ email, password: hashedPassword, name: name, address: address})
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET, { expiresIn: "3h" })

    res.status(200).json({ email: result.email, name: result.name, message: 'users sucessfully created', token})

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" })
  }
}

// Update user password punction
export const password_update = async (req, res) => {
  const {new_password, confirm_new_password} = req.body
  const sentToken = req.body.token
  try {
    if(confirm_new_password != new_password){
      
    }
    check_token = await user_model.findOne({resetToken: sentToken, expireToken:{$gt: Date.now()}})
    if(!check_token){
      return res.status(422).json({error: "Try again session expired"})
    }
    encrypt_password = await bcrypt.hash(new_password, 12)
    await user_model.updateOne({resetToken: sentToken, expireToken:{$gt: Date.now()}}, {
      update: {
        password: encrypt_password,
        resetToken: undefined,
        expireToken: undefined
      }
    })
    
    return res.status(200).json({message: "password updated success"})
  } catch (error) {
    return res.status(500).json({message: "something went wrong"})
  }
}

// Update user profile function
// export const update_profile = async (req, res) => {
//   const {email, address,}
//   try {
    
//   } catch (error) {
    
//   }
// }

// Deactivate user profile function