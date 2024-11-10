import express from 'express';
import Account from '../models/account.js';

const router = express.Router();

// Route to save account data
router.post('/save', async (req, res) => {
  const { address} = req.body;

  try {
    let existingAccount = await Account.findOne({ address });
    if (existingAccount) {
      return res.status(400).json({ message: 'Account already exists' });
    }

    // Create a new account record
    const newAccount = new Account({
      address
    });

    await newAccount.save();
    res.status(201).json({ message: 'Account saved successfully', account: newAccount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
