import { NextResponse } from "next/server";
import { connectDb } from "@/src/app/db/connectDb";
import { CommentsForumModel, validateCommentsForum } from "@/src/app/models/commentForumModel";
import { cookies } from "next/headers";
import { UserModel } from "@/src/app/models/userModel";
import jwt from 'jsonwebtoken';


export const dynamic = 'auto';

export async function GET(req: any, route: any) {
    try {
        await connectDb();
        const data = await CommentsForumModel.find({});
        return NextResponse.json(data);
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ err, msg: "There problem try again later" }, { status: 502 })
    }
}

export async function POST(req: any, route: any) {
    const bodyData = await req.json();
    const validBody = validateCommentsForum(bodyData);
    if (validBody.error) {
        return NextResponse.json(validBody.error.details, { status: 400 })
    }
    if (!cookies().has("token")) {
        return NextResponse.json({ msg: "You need send token" }, { status: 401 })
    }
    try {
        await connectDb();
        const token: any = cookies().get("token")?.value;
        const decodeToken: any = jwt.verify(token, "jonySecret")
        const user = await UserModel.findOne({ _id: decodeToken._id }, { password: 0 });

        //   user.password = await bcrypt.hash(user.password,10);
        //   user.password = "****";
        
        const commentForum = new CommentsForumModel(bodyData);
        commentForum.userId = user._id;
        commentForum.userName = user.name;
        commentForum.date = Date.now();
        await commentForum.save();

        return NextResponse.json(commentForum, { status: 201 })
    }
    catch (err: any) {
        if (err.code == 11000) {
            return NextResponse.json({ code: 11000, msg: "There alredy user with that email" }, { status: 400 })
        }
        console.log(err);
        return NextResponse.json({ err, msg: "There problem try again later" }, { status: 502 })
    }

} 