import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gulab Singh Film City",
  description:
    "Premium cinematic destination in Adilabad, Telangana for film shoots, pre-wedding sessions, and unforgettable events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} bg-background font-sans text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
