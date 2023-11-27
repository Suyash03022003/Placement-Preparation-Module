import mongoose, { Mongoose } from "mongoose";

const subTopicSchema = new mongoose.Schema(
    {
        subTopicName: {
            type: String,
            required: true
        },
        subTopicDescription: {
            type: String,
            required: true
        },
        ccode: {
            type: String
        },
        cppcode: {
            type: String
        },
        javacode: {
            type: String
        }
    },
);

export const SubTopic = mongoose.model('subtopics', subTopicSchema);