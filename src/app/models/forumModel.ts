import mongoose from "mongoose";
import Joi, { array } from "joi";

const forumSchema = new mongoose.Schema({
    userId: String,
    userName:String,
    tittle: String,
    description: String,
    date: String,
    numOfComments:{ 
       type: Number, default:0
    },
    fileName:{ 
       type: String, default:""
    },
    topic:{
        type:String, default:"---"
      }
}, { timestamps: true })

export const ForumModel = mongoose.models["forums"] || mongoose.model("forums", forumSchema);



export const validateForum = (_body: any) => {
    const joiSchema = Joi.object({
        tittle: Joi.string().min(2).max(100).required(),
        description: Joi.string().min(2).max(2000),
        topic: Joi.string().min(2).max(20),
        numOfComments: Joi.number().min(0).max(9999).required(),
        fileName: Joi.string().min(0).max(200).allow("",null),
    })
    return joiSchema.validate(_body)
}