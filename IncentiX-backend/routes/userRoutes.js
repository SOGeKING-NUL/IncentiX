import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// POST: Register user
router.post('/register', async (req, res) => {
  const { email, name, nickname, picture, account, role } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // If user doesn't exist, create a new user
      user = new User({
        email,
        name,
        nickname,
        picture,
        account,
        role,
      });

      await user.save();
    } else {
      // Optionally, update the existing user's role or other details if needed
      user.role = role;
      user.account = account;
      await user.save();
    }

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error });
  }
});

export default router;
