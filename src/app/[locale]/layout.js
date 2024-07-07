import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'App Landing',
  description: 'App landing page desc',
};
/*
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ru' }, { locale: 'ua' }];
}
*/

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  /*
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }*/
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={locale === 'ar' ? '__rtl_lang text-right' : ''}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
