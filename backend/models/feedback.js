import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
        },
        Query:{
            type : String,
            required :true,
        }
    }
)

export const feedback = mongoose.model('interviewquestion', feedbackSchema);