import Navbar from "@/components/header/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Head from "next/head";
import Loading from "./loading";

export const metadata = {
  title: "Portfolio | Fuseini Abdul Wahab",
  description: "FUSEINI ABDUL WAHAB",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <body className="relative w-full h-full text-black bg-white">
        <Loading>
          <Navbar />
          <div className="mb-16 md:mb-80 lg:mb-28">{children}</div>
          <Footer />
        </Loading>
      </body>
    </html>
  );
}
