import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Outfit — clean, modern, premium tech display font
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Inter — clean, professional body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// JetBrains Mono — code / labels
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ridham Pokiya — DevOps & Cloud Engineer",
  description:
    "Portfolio of Ridham Pokiya — DevOps & Cloud Engineer specialising in AWS serverless, CI/CD pipelines, SaaS, and cloud-native development.",
  keywords: ["Ridham Pokiya", "DevOps Engineer", "Cloud Engineer", "AWS", "Portfolio", "Heeratrack", "Validexio"],
  authors: [{ name: "Ridham Pokiya" }],
  openGraph: {
    title: "Ridham Pokiya — DevOps & Cloud Engineer",
    description: "DevOps & Cloud Engineer specialising in AWS, serverless, CI/CD, and SaaS.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
