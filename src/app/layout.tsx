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
  metadataBase: new URL("https://www.baesfoodcentral.co.in"),
  title: "Bae's Food Central | Top Rated Restaurant in Gajuwaka",
  description: "Bae's Food Central. Top Rated Restaurant in Gajuwaka.",
  keywords: [
    "Bae's Food Central",
    "Baes Food Central",
    "Baes Gajuwaka",
    "Bae's Gajuwaka",
    "Bae's Food Central Gajuwaka",
    "Baes Food Central Gajuwaka",
    "Best Restaurant in Gajuwaka",
    "Best Mandi in Gajuwaka",
    "Best Arabian Restaurant in Visakhapatnam"
  ],
  openGraph: {
    title: "Bae's Food Central | Top Rated Restaurant in Gajuwaka",
    description: "Bae's Food Central. Top Rated Restaurant in Gajuwaka.",
    url: "https://www.baesfoodcentral.co.in",
    siteName: "Bae's Food Central",
    images: [
      {
        url: "https://www.baesfoodcentral.co.in/logo.png",
        width: 400,
        height: 400,
        alt: "Bae's Food Central Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bae's Food Central | Top Rated Restaurant in Gajuwaka",
    description: "Bae's Food Central. Top Rated Restaurant in Gajuwaka.",
    images: ["https://www.baesfoodcentral.co.in/logo.png"],
  },
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Bae's Food Central",
              "image": "https://www.baesfoodcentral.co.in/logo.png",
              "@id": "https://www.baesfoodcentral.co.in",
              "url": "https://www.baesfoodcentral.co.in",
              "telephone": "+919177748899",
              "priceRange": "$$",
              "menu": "https://www.baesfoodcentral.co.in/BaesFoodCentral_Menu_2026.pdf",
              "servesCuisine": ["Indian", "Chinese", "Tandoori", "Continental", "Arabic"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Old Gajuwaka",
                "addressLocality": "Visakhapatnam",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "530026",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.6843117,
                "longitude": 83.2026288
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "12:00",
                  "closes": "16:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "18:30",
                  "closes": "22:30"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/baes.gajuwaka/"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
