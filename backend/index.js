import express from 'express';
import { PORT, mongodbURL } from './config.js'
import mongoose from 'mongoose';
import quesRoutes from './routes/QuesRoutes.js';
import userRoutes from './routes/UserRoutes.js';
import dfQuesRoutes from './routes/DFQuesRoutes.js';
import answerRoutes from './routes/AnswerRoutes.js';
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

// app.use(cors
//     ({
//         origin: 'https://localhost:3000',
//         method: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: []
//     })
// );

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Hello! This is Shreya Raut!');
});

app.use('/ques', quesRoutes);
app.use('/user', userRoutes);
app.use('/dfques', dfQuesRoutes);
app.use('/answer', answerRoutes);

mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log('App connected to the database');
        app.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });