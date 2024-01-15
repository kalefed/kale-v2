import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import bgImage from "../public/bgImage.jpg"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="px-32 md:px-32 lg:px-44 min-h-screen overflow-hidden bg-off-white">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
