import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const defaultLocale = "en";
const locales = ["bn", "en"];

function getLocale(request) {
  const acceptedLanguage =
    request.headers.get("accept-language") || defaultLocale;

  const headers = {
    "accept-language": acceptedLanguage,
  };

  const languages = new Negotiator({ headers }).languages();

  try {
    return match(languages, locales, defaultLocale);
  } catch (error) {
    console.error("Locale detection failed:", error);
    return defaultLocale;
  }
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check whether the URL already contains a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  // Continue if locale already exists
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detect user's preferred language
  const locale = getLocale(request);

  // Preserve the original pathname and query parameters
  const url = request.nextUrl.clone();

  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|assets|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
