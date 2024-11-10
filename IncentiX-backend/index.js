import express from 'express';
import './config/dotenv.js';
import cors from 'cors';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import axios from 'axios';
import userRoutes from './routes/userRoutes.js';
import accountRoutes from './routes/accountRoutes.js';

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));

app.use('/api/users', userRoutes);
app.use('/api/account', accountRoutes);

// GitHub OAuth Route
app.post('/auth/github/token', async (req, res) => {
  const { code } = req.body;

  try {
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.VITE_GITHUB_CLIENT_ID,
        client_secret: process.env.VITE_GITHUB_CLIENT_SECRET,
        code,
      },
      { headers: { Accept: 'application/json' } }
    );

    const accessToken = response.data.access_token;
    res.json({ accessToken });
  } catch (error) {
    console.error('Error fetching GitHub access token:', error);
    res.status(500).send('Error fetching GitHub access token');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
