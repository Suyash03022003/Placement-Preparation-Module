import express from 'express';
import { SubTopic } from '../models/subtopics.js';

const router = express.Router();

router.post('/', async (request, response) => {
  try {
    if (
      !request.body.subTopicName ||
      !request.body.subTopicDescription
    ) {
      return response.status(400).send({
        message: 'Enter all the required fields!'
      });
    }

    const newSubTopic = {
      subTopicName: request.body.subTopicName,
      subTopicDescription: request.body.subTopicDescription,
      ccode: request.body.ccode,
      cppcode: request.body.cppcode,
      javacode: request.body.javacode
    };

    const subTopic = await SubTopic.create(newSubTopic);

    return response.status(201).send(subTopic);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.get('/', async (request, response) => {
  try {
    const subtopic = await SubTopic.find({});
    return response.status(200).json(subtopic);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const subtopic = await SubTopic.findById(id);
    return response.status(200).json(subtopic);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put('/:id', async (request, response) => {
  try {
    if (
        !request.body.subTopicName ||
        !request.body.subTopicDescription
    ) {
      return response.status(400).send({
        message: 'Enter all the required fields!'
      });
    }

    const { id } = request.params;

    const subtopic = await SubTopic.findByIdAndUpdate(id, request.body);

    if (!subtopic) {
      return response.status(404).json({ message: 'Sub Topic not found' });
    }
    return response.status(200).send({ message: 'Sub Topic updated successfully' });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const subtopic = await SubTopic.findByIdAndDelete(id);

    if (!subtopic) {
      return response.status(404).json({ message: 'Sub Topic not found' });
    }
    return response.status(200).send({ message: 'Sub Topic deleted successfully' });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

export default router;