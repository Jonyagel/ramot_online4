import { NextResponse } from "next/server";
import {cookies} from "next/headers";
import { UserModel } from "@/src/app/models/userModel";
import jwt from "jsonwebtoken";

export async function GET(req:any,route:any){
  // לבדוק שבכלל נשלח קוקיס עם קיי בשם טוקן
  if(!cookies().has("token")){
    return NextResponse.json({msg:"You need send token"},{status:401})
  }
  try{
    const token:any = cookies().get("token")?.value;
    const decodeToken:any = jwt.verify(token, "jonySecret")
    const data = await UserModel.findOne({_id:decodeToken._id},{password:0});
    return NextResponse.json(data)
  }
  catch(err){
    console.log(err);
    return NextResponse.json({err,msg:"There problem try again later"},{status:502})
  }
  
}