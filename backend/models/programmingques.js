import mongoose from "mongoose";

const quesSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        topic: {
            type: String,
            required: true,
        },
        difficultyLevel: {
            type: String,
            required: true,
        },
        sampleInput: {
            type: String,
            required: true,
        },
        sampleOutput: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    }
)

export const Ques = mongoose.model('programmingQue', quesSchema);