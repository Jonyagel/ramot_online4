import mongoose from "mongoose";
import Joi, { allow } from "joi";

const commentsForumSchema = new mongoose.Schema({
    forumMsgId: String,
    userId: String,
    userName: String,
    comment: String,
    date: String,
    commentReplayContent: String,
    commentReplayUserName: String,
    commentReplayId: {
        type: String, default: ""
    },
}, { timestamps: true })

export const CommentsForumModel = mongoose.models["commentsForums"] || mongoose.model("commentsForums", commentsForumSchema);



export const validateCommentsForum = (_body: any) => {
    const joiSchema = Joi.object({
        forumMsgId: Joi.string().min(2).max(100).required(),
        comment: Joi.string().min(2).max(2000).required(),
        commentReplayId: Joi.string().min(0).max(2000).allow("", null),
        commentReplayContent: Joi.string().min(0).max(2000).allow("", null),
        commentReplayUserName: Joi.string().min(0).max(2000).allow("", null),
    })
    return joiSchema.validate(_body)
}