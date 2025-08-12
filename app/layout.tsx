import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Copering from "@/components/Copering";
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: "J0S3f 2K24",
  description: "Desenvolvedor front-end",
  openGraph: {
    title: "Josef MMXXV",
    description: "Desenvolvedor front-end",
    siteName: "Josef MMXXV",
    images: [
      {
        url: "./../assets/josef-mobile.png",
        width: 800,
        height: 600,
        alt: "Josef MMXXV",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  keywords: [
    "Desenvolvedor web",
    "Desenvolvedor Front-end",
    "Desenvolvedor Full-stack",
    "Josef MMXXV",
    "Javascript",
    "Typescript",
    "Java",
    "Next.js",
    "React",
    "Tailwind CSS"
  ],
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
        <Analytics />
      </body>
    </html>
  );
}
