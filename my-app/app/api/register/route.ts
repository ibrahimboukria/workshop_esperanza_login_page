import { NextResponse } from "next/server";
const register:any[] = [];
export  async function POST(request:Request){
try{
    const data = await request.json();
    register.push(data)
    console.log(data);
    console.log(register);
    return NextResponse.json({message : "Done"});


}catch(error)
{
console.error(error);
}
    
    
    
    
}