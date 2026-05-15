import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  if (!data?.name || !data?.phone) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }

  console.log("[contact]", {
    name: data.name,
    phone: data.phone,
    email: data.email ?? null,
    service: data.service ?? null,
    message: data.message ?? null,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
