import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ζωή Παντού",
  description:
    "Ψυχοθεραπεία στην Αθήνα και online, με έμφαση στην εμπιστοσύνη, τη σταθερότητα και την προσωπική φροντίδα.",
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
