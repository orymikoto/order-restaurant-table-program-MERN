// Import NPM package

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
    const result = await user_model.create({ email, password: hashedPassword, name: name})
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET, { expiresIn: "3h" })

    res.status(200).json({ email: result.email, name: result.name, message: 'users sucessfully created', token})

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" })
  }
}

// Update user password punction


// Update user profile function

// Deactivate user profile function