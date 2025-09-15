import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET,POST,PATCH,OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type,x-admin-key");
  return res;
}

export const config = {
  matcher: "/api/:path*",
};