import { NextResponse } from "next/server";

export async function GET(req:any,route:any){
  try{

    return NextResponse.json({msg:'its work'})
  }
  catch(err){
    console.log(err);
    return NextResponse.json({err,msg:"There problem try again later"},{status:502})
  }
}