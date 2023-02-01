// Import NPM package

// Import local package
// import user_model from '../data/model/users.js'

// Sign-in / Login function
export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const existing_user = await user_model.findOne({ email })
  } catch (error) {
    
  }
}


// Sign-up / Register function

// Update user password punction

// Update user profile function

// Deactivate user profile function