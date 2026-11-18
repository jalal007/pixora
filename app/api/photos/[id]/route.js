import { NextResponse } from "next/server";
import { getPhotoById } from "@/lib/data";

export async function GET(request, { params }) {
  const photoId = params?.id;
  const data = await getPhotoById(photoId);
  return NextResponse.json(data);
}
