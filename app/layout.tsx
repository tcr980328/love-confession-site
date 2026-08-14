import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "有件事想問你 ♡",
  description: "一封只寫給你的告白。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
