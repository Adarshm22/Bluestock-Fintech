import dotenv from 'dotenv'
import app from './app.js';

dotenv.config({
    path:"../.env"
});

const PORT = process.env.PORT || 8000;

