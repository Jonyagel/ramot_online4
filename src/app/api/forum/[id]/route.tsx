import { connectDb } from "@/src/app/db/connectDb";
import { ForumModel } from "@/src/app/models/forumModel";
import { NextRequest, NextResponse } from "next/server";


export const dynamic = 'auto';


export async function GET(req: NextRequest, route: any) {
    try {
        await connectDb();
        const id = req.url.split("http://localhost:3000/api/forum/")[1];
        const data = await ForumModel.findOne({_id: id });
        return NextResponse.json(data);
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ err, msg: "There problem try again later" }, { status: 502 })
    }
}