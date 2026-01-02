"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { I18nProvider } from "@/utils/i18n";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { UserProvider } from "../contexts/UserContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>StoryUp</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-100`}>
        <UserProvider>
          <I18nProvider>
            <Header />
            <Sidebar />
            <main>{children}</main>
          </I18nProvider>
        </UserProvider>
      </body>
    </html>
  );
}
