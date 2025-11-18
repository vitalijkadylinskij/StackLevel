import { Manrope as Monrope } from "next/font/google"
import "../globals.css";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {ThemeProvider} from "@/components/theme-provider/theme-provider";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";

const monrope = Monrope({
    subsets: ["latin"],
    variable: "--font-monrope",
})

export default async function RootLayout({
  children,params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
    <body className={`${monrope.variable} font-sans antialiased bg-custom-dark text-white overflow-x-hidden`}>
    <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
    <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
