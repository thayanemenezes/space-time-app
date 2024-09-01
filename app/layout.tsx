import type { Metadata } from "next";
import { Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";

const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
});

const bellefeir = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
