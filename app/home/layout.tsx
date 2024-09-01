import type { Metadata } from "next";
import { Barlow_Condensed, Bellefair } from "next/font/google";
import "../globals.css";
import NavBar from "../components/NavBar";

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
      className={`h-full w-full lg:bg-home-desktop md:bg-home-tablet bg-home-tablet bg-no-repeat bg-cover bg-center  ${barlow_condensed.className}`}
    >
      <NavBar />
      <main className={`h-full ${bellefeir.className}`}>{children}</main>
    </section>
  );
}
