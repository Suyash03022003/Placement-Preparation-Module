import express from 'express';
import { feed } from '../models/feedback.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.email ||
            !request.body.query
        ) {
            return response.status(400).send({
                message: 'Enter all the required fields!'
            });
        }

        const newQues = {
            name: request.body.name,
            email: request.body.email,
            query: request.body.query,
        };

        const ques = await feed.create(newQues)

        return response.status(201).send(ques);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {
        const ques = await feed.find({});

        return response.status(200).json(ques);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const que = await feed.findById(id);

        return response.status(200).json(que);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.email ||
            !request.body.query
        ) {
            return response.status(400).send({
                message: 'Enter all the required fields!'
            });
        }

        const { id } = request.params;

        const result = await feed.findByIdAndUpdate(id, request.body);

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

        const result = await feed.findByIdAndDelete(id);

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