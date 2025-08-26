import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Homepage",
  description: "",
  manifest: "/manifest.json",
};

export default function RootLayout(
  { children }: Readonly<{ children: ReactNode }>
) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className="h-screen bg-gray-100 text-black dark:text-white dark:bg-black">
      {children}
    </body>
    </html>
  );
}
