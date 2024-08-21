import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { LOCALES } from './constants';
import { Locale } from './types';

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES.includes(locale as unknown as Locale)) {
    notFound();
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
