import { connectDb } from "@/src/app/db/connectDb";
import { UserModel, validateLogin } from "@/src/app/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";
export async function GET(req: any, route: any) {
  try {

    return NextResponse.json({ msg: 'its login work' })
  }
  catch (err) {
    console.log(err);
    return NextResponse.json({ err, msg: "There problem try again later" }, { status: 502 })
  }
}


export async function POST(req: any, route: any) {
  const bodyData = await req.json();
  const validBody = validateLogin(bodyData);
  if (validBody.error) {
    return NextResponse.json(validBody.error.details, { status: 400 })
  }
  try {
    await connectDb();
    // לבדוק שהמייל קיים בכלל באחד מין הרשומות ביוזרז
    const user = await UserModel.findOne({ email: bodyData.email });
    if (!user) {
      return NextResponse.json({ err: "Email not found" }, { status: 401 })
    }
    // לבדוק שהסיסמא המוצפנת של הרשומה זהה לסיסמא שנשלחה בבאדי
    const passValid = await bcrypt.compare(bodyData.password, user.password);
    if (!passValid) {
      return NextResponse.json({ err: "password not match" }, { status: 401 })
    }
    if (!cookies().has("token")) {
      const newToken = createToken(user._id, user.role)
      const cookieTime = Date.now() + (1000 * 60 * 60 * 24)
      cookies().set("token", newToken, {
        expires: cookieTime
      })
      return NextResponse.json({ msg: "Success , you logged in", token: newToken })
    }
  }
  catch (err) {
    console.log(err);
    return NextResponse.json({ err, msg: "There problem try again later" }, { status: 502 })
  }
}



const createToken = (user_id: any, role: String) => {
  const token = jwt.sign({ _id: user_id, role }, "jonySecret", { expiresIn: "24h" })
  return token;
}