import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const battlesbridge = localFont({
  src: "./fonts/BattlesbridgeDemoRegular.ttf",
  variable: "--font-battlesbridge",
});

const jurassicPark = localFont({
  src: "./fonts/JurassicPark.otf",
  variable: "--font-jurassic",
});

export const metadata: Metadata = {
  title: "Bae's Food Central | Top Rated Restaurant in Gajuwaka",
  description: "Bae's Food Central. Top Rated Restaurant in Gajuwaka.",
  keywords: ["Bae's Food Central", "Best Restaurant in Gajuwaka", "Best Mandi in Gajuwaka", "Best Arabian Restaurant in Visakhapatnam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${battlesbridge.variable} ${jurassicPark.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
