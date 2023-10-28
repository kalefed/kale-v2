import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className=" min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
