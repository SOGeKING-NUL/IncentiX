import express from 'express'
import './config/dotenv.js'
import cors from 'cors'
import connectDB from './config/db.js';
import bodyParser from 'body-parser';

const app = express()

connectDB()

app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:5173"],
}));

const PORT = process.env.PORT || 5000 ;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `);
})