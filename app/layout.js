import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="px-16 md:px-32 lg:px-64 min-h-screen overflow-hidden">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
