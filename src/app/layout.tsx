import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bioenerji ile Doğanın Şifası - Evrensel Yaşam Enerjisi Merkezi",
  description: "Bioenerji uzmanı ile evrenin enerjisini keşfedin. Doğayla buluşun, nefes alın, huzuru ve içsel ferahlığı yaşayın. Beden, zihin ve ruh için bütünsel şifa!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16992672093"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16992672093');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
