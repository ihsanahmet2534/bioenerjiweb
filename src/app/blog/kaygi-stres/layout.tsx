import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pozitif Enerji Çalışmalarıyla Sağlıklı Dengeli Bir Yaşam",
  description: "Pozitif enerji çalışmaları ve kadim bilgelik yöntemleriyle sağlıklı, dengeli ve uzun bir yaşam için bioenerji seansları.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 