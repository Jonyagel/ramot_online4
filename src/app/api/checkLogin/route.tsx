import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function GET(req: any, route: any) {
    try {
        if (cookies().has("token")) {
            const token: any = cookies().get("token")?.value;
            return NextResponse.json({ msg: "you login success",token, status: 200 }, { status: 200 })
        }
        return NextResponse.json({ msg: "You need send token", status: 401 }, { status: 401 })
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ err, msg: "There problem try again later" }, { status: 502 })
    }
}