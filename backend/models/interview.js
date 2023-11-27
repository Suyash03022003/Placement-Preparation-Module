import mongoose from "mongoose";

const interviewSchema = mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
    }
)

export const interviewques = mongoose.model('interviewquestion', interviewSchema);