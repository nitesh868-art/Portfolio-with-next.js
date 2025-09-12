import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";

const fontSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Nitesh Pandey - Software Developer & Frontend Specialist",
  description: "Professional portfolio of Nitesh Pandey, a skilled Software Developer specializing in React.js, TypeScript, Next.js, and modern web technologies. Explore my projects, skills, and experience in frontend development.",
  keywords: [
    "Nitesh Pandey",
    "Software Developer",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Web Development",
    "UI/UX Design",
    "Portfolio",
    "JavaScript",
    "Tailwind CSS"
  ],
  authors: [{ name: "Nitesh Pandey" }],
  creator: "Nitesh Pandey",
  publisher: "Nitesh Pandey",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://niteshpandey.vercel.app",
    title: "Nitesh Pandey - Software Developer & Frontend Specialist",
    description: "Professional portfolio showcasing modern web development skills and innovative projects.",
    siteName: "Nitesh Pandey Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nitesh Pandey - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitesh Pandey - Software Developer & Frontend Specialist",
    description: "Professional portfolio showcasing modern web development skills and innovative projects.",
    images: ["/og-image.jpg"],
    creator: "@niteshpandey",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#000000",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${fontSans.className} antialiased`}>
        <div className="app-background flex flex-col min-h-screen text-white relative bg-[#121629]">
          <StarBackground />
          <Header />
          <Navbar />
          <main className="flex-grow z-10 relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
