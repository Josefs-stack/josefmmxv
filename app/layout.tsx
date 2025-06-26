import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Copering from "@/components/Copering";

export const metadata: Metadata = {
  title: "Josef MMXXV",
  description: "Portfólio de Josef, um desenvolvedor web criativo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className='w-full h-screen bg-neutral-950 antialiased'
      >
        <Header />
        {children}
        <Copering />
      </body>
    </html>
  );
}
