import type { Metadata } from "next";
import { Barlow_Condensed, Bellefair } from "next/font/google";
import "../globals.css";
import NavBar from "../components/Nav";

const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
});

const bellefeir = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Space Time",
  description: "To travel the space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={`h-full w-full min-h-screen min-w-screen lg:bg-home-desktop md:bg-home-tablet bg-home-mobile bg-no-repeat bg-cover ${barlow_condensed.className}`}
    >
      <NavBar />
      <main className={`h-full ${bellefeir.className}`}>{children}</main>
    </section>
  );
}
