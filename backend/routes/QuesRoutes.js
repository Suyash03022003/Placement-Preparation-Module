import express from 'express';
import { Ques } from '../models/programmingques.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
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
});

router.get('/', async (request, response) => {
    try {
        const ques = await Ques.find({});

        return response.status(200).json(ques);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const que = await Ques.findById(id);

        return response.status(200).json(que);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        if (
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

        const { id } = request.params;

        const result = await Ques.findByIdAndUpdate(id, request.body);

        if(!result) {
            return response.status(404).json({ message: 'Question not found' });
        }

        return response.status(200).send({ message: 'Question updated successfully' });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({ message: 'Question not found' });
        }
        return response.status(200).send({ message: 'Question deleted successfully' });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

export default router;