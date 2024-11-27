import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Admin routes protection
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const response = await fetch(new URL("/api/auth/session", request.url));
    const { user } = await response.json();

    if (!user) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    if (user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Protected routes for authenticated users
  if (
    request.nextUrl.pathname.startsWith("/account") ||
    request.nextUrl.pathname.startsWith("/checkout")
  ) {
    const response = await fetch(new URL("/api/auth/session", request.url));
    const { user } = await response.json();

    if (!user) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/account/:path*",
    "/checkout/:path*",
    "/api/admin/:path*"
  ],
};