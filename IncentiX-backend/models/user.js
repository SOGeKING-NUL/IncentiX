import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // Ensures that each user has a unique email
    },
    name: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
    },
    picture: {
      type: String, // URL for the profile picture
    },
    account: {
      type: String, // Auth0's unique user ID (sub), or wallet address if applicable
      required: true,
      unique: true, // Ensure unique wallet or account
    },
    role: {
      type: String,
      enum: ['contributor', 'maintainer'], // Example roles
      default: 'contributor', // Default role, you can change based on your logic
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  }
);

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;
