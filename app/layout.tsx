import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import { Playfair_Display } from "next/font/google"
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Thvani",
  description: "Generated by create next app",
};

const font = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className={font.className}>
        <StoreProvider>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
