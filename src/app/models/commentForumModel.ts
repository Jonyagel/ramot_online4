import mongoose from "mongoose";
import Joi from "joi";

const commentsForumSchema = new mongoose.Schema({
    forumMsgId:String,
    userId: String,
    userName:String,
    comment: String,
    date: String,
}, { timestamps: true })

export const CommentsForumModel = mongoose.models["commentsForums"] || mongoose.model("commentsForums", commentsForumSchema);



export const validateCommentsForum = (_body: any) => {
    const joiSchema = Joi.object({
        forumMsgId: Joi.string().min(2).max(100).required(),
        comment: Joi.string().min(2).max(2000).required(),
    })
    return joiSchema.validate(_body)
}