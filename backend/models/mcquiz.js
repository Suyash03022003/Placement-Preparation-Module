import mongoose from "mongoose";

const mcquizSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    difficultyLevel: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    correctAnswer: {    
        type: String,
        required: true,
    },
});

export const MCQues = mongoose.model('mcquizzes', mcquizSchema);