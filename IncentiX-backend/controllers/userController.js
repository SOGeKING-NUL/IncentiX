import User from '../models/user.js';

// Register user or update role if user exists
export const registerUser = async (req, res) => {
  const { email, name, nickname, picture, account, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email, name, nickname, picture, account, role });
      await user.save();
    } else {
      user.role = role;
      user.account = account;
      await user.save();
    }

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};
