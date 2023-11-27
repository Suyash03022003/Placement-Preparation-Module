import express from 'express';
import { Topic } from '../models/topics.js';
import { SubTopic } from '../models/subtopics.js';

const router = express.Router();

router.post('/', async (request, response) => {
  try {
    if (
      !request.body.topicName ||
      !request.body.description
    ) {
      return response.status(400).send({
        message: 'Enter all the required fields!'
      });
    }

    const newTopic = {
      topicName: request.body.topicName,
      description: request.body.description,
      imageURL: request.body.imageURL,
      advantages: request.body.advantages,
      disadvantages: request.body.disadvantages,
      applications: request.body.applications,
    };

    const subtopicIDs = await Promise.all(
      request.body.subtopics.map(async (subtopic) => {
        const createdSubtopic = await SubTopic.create(subtopic);
        return createdSubtopic._id;
      })
      );
      console.log(subtopicIDs);
      
      newTopic.subTopics = subtopicIDs;

      const topic = await Topic.create(newTopic);
    return response.status(201).send({ topic });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.get('/:topic', async (request, response) => {
  try {
    const topicName = request.params.topic;
    const mainTopic = await Topic.findOne({ topicName })
    if(!mainTopic) {
      return response.status(404).send({ message: 'Topic not found' });
    }

    return response.status(200).json({ mainTopic });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
})

router.get('/subtopics/:topicName', async (request, response) => {
  try {
    const { topicName } = request.params;

    const mainTopic = await Topic.findOne({ topicName })
      .populate('subTopics')
      .exec();

    if (!mainTopic) {
      return response.status(404).json({ message: 'Topic not found' });
    }

    const subTopics = mainTopic.subTopics;

    return response.status(200).json({ subTopics });
  } catch (error) {
    console.error(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.get('/', async (request, response) => {
  try {
    const topic = await Topic.find({});
    return response.status(200).json(topic);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const topic = await Topic.findById(id);
    return response.status(200).json(topic);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.topicName ||
      !request.body.description
    ) {
      return response.status(400).send({
        message: 'Enter all the required fields!'
      });
    }

    const { id } = request.params;

    const topic = await Topic.findByIdAndUpdate(id, request.body);

    if (!topic) {
      return response.status(404).json({ message: 'Topic not found' });
    }
    return response.status(200).send({ message: 'Topic updated successfully' });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const topic = await Topic.findByIdAndDelete(id);

    if (!topic) {
      return response.status(404).json({ message: 'Topic not found' });
    }
    return response.status(200).send({ message: 'Topic deleted successfully' });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

export default router;