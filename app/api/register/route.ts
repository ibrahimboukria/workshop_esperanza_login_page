
import { NextResponse } from "next/server";

const registrations: any[] = [];

export async function POST(request: Request) {
    const data = await request.json();
    registrations.push(data);
    console.log(registrations);
    return NextResponse.json({ message: "Done" });
}
    
    
