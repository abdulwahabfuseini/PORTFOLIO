import Navbar from "@/components/header/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Fuseini Abdul Wahab",
  description: "FUSEINI ABDUL WAHAB",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-black w-full h-full">
        <Navbar />
        <div className="mb-16 md:mb-80 lg:mb-28">{children}</div>
        <Footer />
      </body>
    </html>
  );
}



{/* <body className={`${inter.className} text-white bg-black w-full h-full`}> */}