import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
  address: { type: String, unique: true },
});

const Account = mongoose.model('Account', accountSchema);

export default Account;