import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { PRODUCT_DESCRIPTION } from "@/client/components/common/constants";
import { SessionProvider } from "@/client/components/common/providers/session-provider";
import "./globals.css";
import { Header } from "@/components/common/header";
import { Sidebar } from "@/components/common/sidebar";
import { cn } from "@/lib/utils";

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
          <div className="flex flex-grow">
            <Sidebar />
            <main className="flex flex-grow items-center flex-col ml-[12%] mr-[8%] mx-auto w-1/2 my-4 overflow-y-auto">
              {children}
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
};
