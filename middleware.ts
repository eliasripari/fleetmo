import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Per my.fleetmo.app aggiungi header per bloccare indicizzazione
  if (host === "my.fleetmo.app") {
    const response = intlMiddleware(request);
    response.headers.set(
      "X-Robots-Tag",
      "noindex, nofollow, noarchive, nosnippet"
    );
    return response;
  }

  // Per wp.fleetmo.app blocca completamente
  if (host === "wp.fleetmo.app") {
    const response = intlMiddleware(request);
    response.headers.set(
      "X-Robots-Tag",
      "noindex, nofollow, noarchive, nosnippet"
    );
    return response;
  }

  // Per fleetmo.app comportamento normale
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
