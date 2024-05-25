import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Lost And Found System",
   description: "This is lost and found system",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Providers>
               <Toaster
                  position="top-center"
                  richColors
               />
               {children}
            </Providers>
         </body>
      </html>
   );
}
