import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { createI18nMiddleware } from "next-international/middleware";
import { env } from "process";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});
export default withAuth(
  async function middleware(req) {
    const response = I18nMiddleware(req);
    let hostname = req.headers
      .get("host")!
      .replace(".localhost:3000", `.${env.NEXT_PUBLIC_ROOT_DOMAIN}`);
    const url = new URL("/", req.url);
    const nextUrl = req.nextUrl;

    const pathnameLocale = nextUrl.pathname.split("/", 2)?.[1] || [];
    // Remove the locale from the pathname
    const pathnameWithoutLocale = nextUrl.pathname.slice(pathnameLocale.length + 1);

    const token = await getToken({ req });
    const isAuth = !!token;
    const isAuthPage =
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register");

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      return null;
    }

    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
      );
    }
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/"],
};
