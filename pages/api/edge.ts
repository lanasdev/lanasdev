import { NextRequest, NextResponse } from "next/server";
import { getAll } from "@vercel/edge-config";

export const config = {
  runtime: "edge",
};

export default async function Edge(request: NextRequest) {
  const configItems = await getAll();
  return NextResponse.json(configItems);
}
