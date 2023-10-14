import express from 'express';
import { PORT, mongodbURL } from './config.js'
import mongoose from 'mongoose';
import { Ques } from './models/programmingques.js'

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Hello! This is Shreya Raut!');
});

app.post('/ques', async (request, response) => {
    try {
        if(
            !request.body.title ||
            !request.body.difficultyLevel ||
            !request.body.topic ||
            !request.body.sampleInput ||
            !request.body.sampleOutput ||
            !request.body.description
        ) {
            return response.status(400).send({
                message: 'Enter all the required fields!'
            });
        }

        const newQues = {
            title: request.body.title,
            topic: request.body.topic,
            difficultyLevel: request.body.difficultyLevel,
            sampleInput: request.body.sampleInput,
            sampleOutput: request.body.sampleOutput,
            description: request.body.description,
        };

        const ques = await Ques.create(newQues)

        return response.status(201).send(ques);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
})

app.get('/ques', async (request, response) => {
    try {
        const ques = await Ques.find({});

        return response.status(200).json(ques);
    } catch(error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
})

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