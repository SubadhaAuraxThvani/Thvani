import { NextResponse } from "next/server";
import { auth } from "@/app/auth";

export default auth(async function middleware(req) {
  const token = req.cookies.get("authToken");
  const session = req.auth;

  // Clear authToken cookie if session is not present
  if (!session && token) {
    const response = NextResponse.next();
    response.cookies.delete("authToken");
    return response;
  }

  if (req.nextUrl.pathname === "/reset-password") {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/profile")) {
    if (!token && !session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (
    (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/signup") &&
    (token || session)
  ) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
