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

export default function DestinationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={`h-full w-full bg-destination-tablet lg:bg-destination-desktop md:bg-destination-tablet bg-no-repeat bg-cover ${barlow_condensed.className}`}
    >
      <NavBar />
      <div className={`h-full ${bellefeir.className}`}>{children}</div>
    </section>
  );
}
