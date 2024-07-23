import { NextResponse } from "next/server";
import { connectDb } from "../../db/connectDb";
import { UserModel, validateUser } from "@/src/app/models/userModel";
import bcrypt from 'bcrypt';
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

export async function GET(req: any, route: any) {
  // לבדוק שבכלל נשלח קוקיס עם קיי בשם טוקן
  if (!cookies().has("token")) {
    return NextResponse.json({ msg: "You need send token" }, { status: 401 })
  }
  try {
    const token: any = cookies().get("token")?.value;
    const decodeToken: any = jwt.verify(token, "jonySecret")
    const data = await UserModel.findOne({ _id: decodeToken._id }, { password: 0 });
    return NextResponse.json(data)
  }
  catch (err) {
    console.log(err);
    return NextResponse.json({ err, msg: "There problem try again later" }, { status: 502 })
  }

}


export async function POST(req: any, route: any) {
  const bodyData = await req.json();
  const validBody = validateUser(bodyData);
  if (validBody.error) {
    return NextResponse.json(validBody.error.details, { status: 400 })
  }
  try {
    await connectDb();
    const userLogin = await UserModel.findOne({ email: bodyData.email });
    if (!userLogin) {
      const user = new UserModel(bodyData);
      user.password = await bcrypt.hash(user.password, 10);
      await user.save();
      user.password = "****";
      const newToken = createToken(user._id, user.role)
      const cookieTime = Date.now() + (1000 * 60 * 60)
      cookies().set("token", newToken, {
        expires: cookieTime
      })
      return NextResponse.json({ user, token: newToken }, { status: 201 })
    }
    const passValid = await bcrypt.compare(bodyData.password, userLogin.password);
    if (!passValid) {
      return NextResponse.json({ err: "password not match" }, { status: 401 })
    }
    if (!cookies().has("token")) {
      const newToken = createToken(userLogin._id, userLogin.role)
      const cookieTime = Date.now() + (1000 * 60 * 60)
      cookies().set("token", newToken, {
        expires: cookieTime
      })
      return NextResponse.json({ msg: "Success , you logged in", token: newToken })
    }



  }
  catch (err: any) {
    if (err.code == 11000) {
      return NextResponse.json({ code: 11000, msg: "There alredy user with that email" }, { status: 400 })
    }
    console.log(err);
    return NextResponse.json({ err, msg: "There problem try again later" }, { status: 502 })
  }

}

const createToken = (user_id: any, role: String) => {
  const token = jwt.sign({ _id: user_id, role }, "jonySecret", { expiresIn: "24h" })
  return token;
}