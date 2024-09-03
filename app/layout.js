import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
