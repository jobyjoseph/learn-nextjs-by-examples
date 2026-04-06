import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/Header";
import { Sidebar } from "./_components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn Next.js by Examples",
  description:
    "A collection of Next.js examples to help you learn and understand the framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="mx-auto w-full px-8 max-w-3xl mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
