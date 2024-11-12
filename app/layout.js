import "./globals.css";
import { Poppins } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Imperial_Script } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const CormorantGaramond = Cormorant_Garamond({
  weight: "400",
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});
const ImperialScript = Imperial_Script({
  weight: "400",
  variable: "--font-imperial-script",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${CormorantGaramond.variable} ${ImperialScript.variable} ${poppins.variable}`}
      >
        <div className="flex justify-center w-full">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
