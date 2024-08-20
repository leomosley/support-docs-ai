import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { PRODUCT_DESCRIPTION } from "@/client/components/common/constants";
import "./globals.css";
import { Header } from "@/components/nav/header";
import { Sidebar } from "@/components/nav/sidebar";
import { cn } from "@/lib/utils";
import { SessionProvider } from "@/components/providers/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_PRODUCT_NAME ?? "",
  description: PRODUCT_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "leading-relaxed text-base")}>
        <SessionProvider>
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex flex-grow">
              {children}
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
};
