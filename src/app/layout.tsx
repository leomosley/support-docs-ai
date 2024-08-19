import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { PRODUCT_DESCRIPTION } from "@/client/components/common/constants";
import { SessionProvider } from "@/client/components/common/providers/session-provider";
import "./globals.css";
import { Header } from "@/components/common/header";
import { Sidebar } from "@/components/common/sidebar";
import clsx from "clsx";

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
      <body className={clsx(inter.className, "leading-relaxed text-base")}>
        <SessionProvider>
          <Header />
          <Sidebar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
};
