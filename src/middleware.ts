import createMiddleware from 'next-intl/middleware';

import { LOCALES } from './constants';

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
