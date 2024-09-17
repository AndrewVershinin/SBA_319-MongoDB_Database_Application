import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import connectDb from './db/conn.js';
import userRoute from './routes/userRoute.js'
import postRoute from './routes/postRoute.js'
import commentRoute from './routes/commentRoute.js';

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Welcome')
});

// Use the routes
app.use('/api', userRoute);
app.use('/api', postRoute);
app.use('/api', commentRoute);

app.use((err, _req, res, next) => {
    res.status(500).send('Seems like we messed up somewhere')
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    connectDb();
});
