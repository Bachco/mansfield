import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { barlow, rubik } from "@/public/fonts/_fonts";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "BM - welding",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${barlow.variable} font-rubik`}>
      <body id="page-wrap">
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
