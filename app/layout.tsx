import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taker of Notes",
  description:
    "A simple note taking app that conforms to Solace's acceptance criteria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex bg-[linear-gradient(45deg,#3f937c,#0000)] min-h-screen flex-col items-center p-16`}
      >
        {children}
      </body>
    </html>
  );
}
