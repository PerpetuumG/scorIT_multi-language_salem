import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar', 'ru', 'ua'],

  // Used when no locale matches
  defaultLocale: 'en',
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  // matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
  matcher: ['/', '/(ru|ua|ar|en)/:path*'],
};
