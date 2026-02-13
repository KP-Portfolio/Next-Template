/* Flow Chart Compatible File */
/* API Function Start */

/* Imports */
import { NextResponse } from "next/server";

/* API Function End */

export async function GET(request: Request) {
  /* GET Request Start */
  const { searchParams } = new URL(request.url);
  /* GET Request End */

  /* Parse Params Start */
  const username = searchParams.get("username");
  const password = searchParams.get("password");
  /* Parse Params End */

  /* Fetch Users Start */
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users.json`);
  const data = await res.json();
  /* Fetch Users End */

  /* Find User Start */
  const user = data.users.find(
    (u: any) => u.email === username && u.password === password
  );
  /* Find User End */

  /* Return User Start */
  if (user) {
    return NextResponse.json(user);
  } else {
    /* Return Error Start */
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    /* Return Error End */
  }
  /* Return User End */
}