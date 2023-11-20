import express from 'express';
import { Answer } from '../models/answer.js';

const router = express.Router();

router.post('/', async (request, response) => {
  try {
    if (
      !request.body.question ||
      !request.body.answer ||
      !request.body.user
    ) {
      return response.status(400).send({
        message: 'Enter all the required fields!'
      });
    }

    const newAnswer = {
      question: request.body.question,
      answer: request.body.answer,
      user: request.body.user
    };

    const ans = await Answer.create(newAnswer)

    return response.status(201).send(ans);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.get('/', async (request, response) => {
  try {
    const ans = await Answer.find({});
    return response.status(200).json(ans);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const ans = await Answer.findById(id);
    return response.status(200).json(ans);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.question ||
      !request.body.answer ||
      !request.body.user
    ) {
      return response.status(400).send({
        message: 'Enter all the required fields!'
      });
    }

    const { id } = request.params;

    const ans = await Answer.findByIdAndUpdate(id, request.body);

    if (!ans) {
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

    const ans = await Answer.findByIdAndDelete(id);

    if (!ans) {
      return response.status(404).json({ message: 'Question not found' });
    }
    return response.status(200).send({ message: 'Question deleted successfully' });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

export default router;