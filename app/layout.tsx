import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ζωή Παντού",
  description:
    "Online ψυχοθεραπεία στα ελληνικά με σταθερό πλαίσιο, εμπιστοσύνη και κόστος 40 ευρώ ανά ώρα.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
