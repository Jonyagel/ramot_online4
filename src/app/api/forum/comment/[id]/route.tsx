import { connectDb } from "@/src/app/db/connectDb";
import { CommentsForumModel } from "@/src/app/models/commentForumModel";
import { ForumModel } from "@/src/app/models/forumModel";
import { NextRequest, NextResponse } from "next/server";


export const dynamic = 'auto';


export async function GET(req: NextRequest, route: any) {
    try {
        await connectDb();
        const id = req.url.split(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/comment/`)[1];
        const data = await CommentsForumModel.find({forumMsgId: id });
        return NextResponse.json(data);
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ err, msg: "There problem try again later" }, { status: 502 })
    }
}