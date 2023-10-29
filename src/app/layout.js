import Navbar from "@/components/header/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Loading from "./loading";

export const metadata = {
  title: "Portfolio | Fuseini Abdul Wahab",
  description: "FUSEINI ABDUL WAHAB",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-black w-full h-full relative">
        <Loading>
          <Navbar />
          <div className="mb-16 md:mb-80 lg:mb-28">{children}</div>
          <Footer />
        </Loading>
      </body>
    </html>
  );
}
