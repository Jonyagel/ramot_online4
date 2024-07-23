import mongoose from "mongoose";
import Joi from "joi";

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  role:{
    type:String, default:"user"
  }
},{timestamps:true})

export const UserModel = mongoose.models["users"] || mongoose.model("users",userSchema);



export const validateUser = (_body:any) => {
  const joiSchema = Joi.object({
    name:Joi.string().min(2).max(100).required(),
    email:Joi.string().min(2).max(100).email().required(),
    password:Joi.string().min(3).max(100).required(),
  })
  return joiSchema.validate(_body)
}

export const validateLogin = (_body:any) => {
  const joiSchema = Joi.object({
    email:Joi.string().min(2).max(100).email().required(),
    password:Joi.string().min(3).max(100).required(),
  })
  return joiSchema.validate(_body)
}











//npm i joi monogoose @types/bcrypt @types/jsonwebtoken jose