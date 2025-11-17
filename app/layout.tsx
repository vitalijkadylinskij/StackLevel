import { Manrope as Monrope } from "next/font/google"
import "./globals.css";

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

  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
    <body className={`${monrope.variable} font-sans antialiased bg-custom-dark text-white overflow-x-hidden`}>
    {children}
    </body>
    </html>
  );
}
