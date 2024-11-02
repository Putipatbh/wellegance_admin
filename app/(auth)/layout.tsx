import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
  } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wellegance - Admin Auth",
  description: "Admin dashboard to manage Wellegance's data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
          <SignedOut>
          </SignedOut>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}