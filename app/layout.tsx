import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { El_Messiri } from "next/font/google";
import { Header } from "@/components/ui/header";
import { ConvexClientProvider } from "./convex-client-provider";

const elMessiri = El_Messiri({
  variable: "--font-el-messiri",
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${elMessiri.variable} antialiased`}>
          <Header />
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
