import { NextResponse } from "next/server";
import { connectDb } from "../../db/connectDb";
import { ForumModel, validateForum } from "@/src/app/models/forumModel";
import { cookies } from "next/headers";
import { UserModel } from "@/src/app/models/userModel";
import jwt from 'jsonwebtoken';
import { CommentsForumModel } from "../../models/commentForumModel";


export const dynamic = 'auto';

export async function GET(req: any, route: any) {
    try {
        await connectDb();
        const data = await ForumModel.find({});
        return NextResponse.json(data);
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ err, msg: "There problem try again later" }, { status: 502 })
    }
}

export async function POST(req: any, route: any) {
    const bodyData = await req.json();
    const validBody = validateForum(bodyData);
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
        const forum = new ForumModel(bodyData);
        forum.userId = user._id;
        forum.userName = user.name;
        forum.date = Date.now();
        await forum.save();

        return NextResponse.json(forum, { status: 201 })
    }
    catch (err: any) {
        if (err.code == 11000) {
            return NextResponse.json({ code: 11000, msg: "There alredy user with that email" }, { status: 400 })
        }
        console.log(err);
        return NextResponse.json({ err, msg: "There problem try again later" }, { status: 502 })
    }

} 