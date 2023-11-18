import mongoose from "mongoose";

const quesSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: String,
        tags: [],
        created_on: {
            type: Date,
            default: Date.now(),
        },
        views: {
            type: Number,
            default: 0,
        },
        likes: {
            type: Number,
            default: 0,
        },
        answers: {
            type: Number,
            default: 0,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        }
    }
)

export const Ques = mongoose.model('questions', quesSchema);