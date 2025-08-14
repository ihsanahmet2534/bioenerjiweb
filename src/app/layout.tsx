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
  title: "Pozitif Enerji Çalışmalarıyla Sağlıklı Dengeli Bir Yaşam",
  description: "Pozitif enerji çalışmaları ve kadim bilgelik yöntemleriyle sağlıklı, dengeli ve uzun bir yaşam için bioenerji seansları.",
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
