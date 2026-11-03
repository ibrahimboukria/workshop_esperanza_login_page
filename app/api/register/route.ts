import { NextResponse } from "next/server";
export default async function POST(request:Request){
    const data = await request.json();
    console.log(data);


    
    
    return NextResponse.json({message : "Done"})
}