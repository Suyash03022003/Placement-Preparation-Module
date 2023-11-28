import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        query:{
            type : String,
            required :true,
        }
    }
)

export const feed = mongoose.model('feed', feedbackSchema);