import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { garamond } from "@/public/fonts/_fonts";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Mansfield",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${garamond.variable} font-garamond`}>
      <body id="page-wrap" className="bg-black min-h-screen flex flex-col justify-center">
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
