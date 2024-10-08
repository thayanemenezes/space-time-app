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

export default function TechnologyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={`h-full w-full bg-technology-tablet lg:bg-technology-desktop md:bg-technology-tablet bg-no-repeat bg-cover ${barlow_condensed.className}`}
    >
      <NavBar />
      <div className={`h-full relative ${bellefeir.className}`}>{children}</div>
    </section>
  );
}
