import express from 'express';
import { MCQues } from '../models/mcquiz.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.topic ||
            !request.body.difficultyLevel ||
            !request.body.question ||
            !request.body.options ||
            !request.body.correctAnswer 
        ) {
            return response.status(400).send({
                message: 'Enter all the required fields!'
            });
        }

        const newQuiz = {
            topic: request.body.topic,
            difficultyLevel: request.body.difficultyLevel,
            question: request.body.question,
            options: request.body.options,
            correctAnswer: request.body.correctAnswer,
        };

        const ques = await MCQues.create(newQuiz)

        return response.status(201).send(ques);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// router.get('/', async (request, response) => {
//     try {
//         const ques = await MCQues.find({});

//         return response.status(200).json(ques);
//     } catch (error) {
//         console.log(error.message);
//         return response.status(500).send({ message: error.message });
//     }
// });

router.get('/', async (request, response) => {
    try {
        const { topic, difficultyLevel } = request.query;

        const filter = {};
        if (topic) {
            filter.topic = topic;
        }
        if (difficultyLevel) {
            filter.difficultyLevel = difficultyLevel;
        }

        const mcquiz = await MCQues.find(filter);

        return response.status(200).json(mcquiz);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.topic ||
            !request.body.difficultyLevel ||
            !request.body.question ||
            !request.body.options ||
            !request.body.correctAnswer 
        ) {
            return response.status(400).send({
                message: 'Enter all the required fields!'
            });
        }

        const { id } = request.params;

        const result = await MCQues.findByIdAndUpdate(id, request.body);

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

        const result = await MCQues.findByIdAndDelete(id);

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