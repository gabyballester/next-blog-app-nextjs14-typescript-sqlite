import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const json = await req.json();

    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
};
