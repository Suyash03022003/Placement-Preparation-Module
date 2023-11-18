import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
    {
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "questions",
        },
        answer: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now(),
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        upvotes: {
            type: Number,
            default: 0,
        },
        downvotes: {
            type: Number,
            default: 0,
        },
    },
);

export const Answer = mongoose.model('answers', answerSchema);