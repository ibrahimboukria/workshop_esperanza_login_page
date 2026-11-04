import { NextResponse } from "next/server";

const registrations: any[] = [];

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.firstName || !data.lastName || !data.email) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    registrations.push(data);

    console.log(registrations);

    return NextResponse.json(
      { message: "Registration successful" },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
