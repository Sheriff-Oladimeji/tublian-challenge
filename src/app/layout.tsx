import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tublian Onboarding",
  description: "Tublian's Hackathon Challenge Solution - Sheriff Oladimeji",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${font.className} m-0 p-0 box-border bg-[#121212] `}
      >
        <div className="sm:hidden">
          <Navbar />
        </div>
        {children}
       
      </body>
    </html>
  );
}
