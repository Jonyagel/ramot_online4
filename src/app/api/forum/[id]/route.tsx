import { connectDb } from "@/src/app/db/connectDb";
import { ForumModel } from "@/src/app/models/forumModel";
import { NextRequest, NextResponse } from "next/server";


// export const dynamic = 'auto';


export async function GET(req: any, route: any) {
    try {
        await connectDb();
        const idParams = route.params.id;
        // const id = req.url.split(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/`)[1];
        // const {id} = req.query;
        const data = await ForumModel.findOne({ _id: idParams });
        return NextResponse.json(data);
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ err, msg: "There problem try again later", }, { status: 502 })
    }
}

export async function PUT(req: any, route: any) {
    const bodyData = await req.json();
    try {
        await connectDb();
        const id = req.url.split(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/`)[1];
        // const {id} = req.query;
        const forumEdit = { _id: id }
        const forumData = await ForumModel.updateOne(forumEdit, bodyData);
        return NextResponse.json(forumData);
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ err, msg: "There problem try again later", }, { status: 502 })
    }
}