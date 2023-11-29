import mongoose, { Mongoose } from "mongoose";

const topicSchema = new mongoose.Schema(
    {
        topicName: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageURL: {
            type: String,
        },
        advantages: {
            type: String,
        },
        disadvantages: {
            type: String,
        },
        applications: {
            type: String,
        },
        subTopics: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: "subtopics"
        }]
    },
);

export const Topic = mongoose.model('topics', topicSchema);