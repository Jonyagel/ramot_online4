import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './bootstrap.min.css';
import Header from "./header/page";
import localFont from 'next/font/local'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ramot online",
  description: "Generated by create next app",
};



const assistantFont = localFont({
  src: [
    {
      path: '../../public/fonts/assistant/Assistant-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/assistant/Assistant-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/assistant/Assistant-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={assistantFont.className}>
            <body className={inter.className}>
              <Header />
              {children}
              <Analytics />
            </body>
          </html>
          );
}
