import express from 'express';
import { interviewques } from '../models/interview.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.question ||
            !request.body.answer 
        ) {
            return response.status(400).send({
                message: 'Enter all the required fields!'
            });
        }

        const newQues = {
            question: request.body.question,
            answer: request.body.answer,
        };

        const ques = await interviewques.create(newQues)

        return response.status(201).send(ques);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {
        const ques = await interviewques.find({});

        return response.status(200).json(ques);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const que = await interviewques.findById(id);

        return response.status(200).json(que);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.question ||
            !request.body.answer 
        ) {
            return response.status(400).send({
                message: 'Enter all the required fields!'
            });
        }

        const { id } = request.params;

        const result = await interviewques.findByIdAndUpdate(id, request.body);

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

        const result = await interviewques.findByIdAndDelete(id);

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