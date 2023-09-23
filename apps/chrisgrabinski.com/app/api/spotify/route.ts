import { getCurrentlyPlaying } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getCurrentlyPlaying().then((res) => res.json());

  return NextResponse.json({ data });
}
