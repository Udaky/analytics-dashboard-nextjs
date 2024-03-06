import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/analytics") {
    // track analytics event
    try {
      analytics.track("pageview", {
        page: "/analytics",
        country: req.geo?.country,
      });
    } catch (err) {
      // fail silently
    }
  }

  return NextResponse.next();
}

export const matcher = {
  matcher: ["/"],
};
