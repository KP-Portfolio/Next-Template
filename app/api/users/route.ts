import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const password = searchParams.get("password");

  // Fetch the JSON file from the public folder
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users.json`);
  const data = await res.json();

  const user = data.users.find(
    (u: any) => u.email === username && u.password === password
  );

  if (user) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}