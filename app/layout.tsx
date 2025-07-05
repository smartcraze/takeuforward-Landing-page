import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TUF+ | Master DSA, System Design & Core CS",
  description:
    "TUF+ is your all-in-one platform to master DSA, system design, core CS subjects, and more. Get curated roadmaps, 1000+ problems, real interview questions, and expert-reviewed code — all in one place.",
  keywords: [
    "TUF+",
    "DSA Course",
    "System Design",
    "Coding Interview",
    "Core CS Subjects",
    "OOPs",
    "LLD",
    "Data Structures",
    "Algorithms",
    "Placement Preparation",
    "Tech Interview",
    "TUF Premium",
    "takeUforward"
  ],
  authors: [
    { name: "takeUforward" },
    { name: "Suraj Vishwakarma", url: "https://github.com/smartcraze" }
  ],
  creator: "takeUforward",
  publisher: "TUF+",
  metadataBase: new URL("https://takeuforward.org"),
  openGraph: {
    type: "website",
    url: "https://takeuforward.org",
    title: "TUF+ | Master DSA, System Design & Core CS",
    description:
      "All-in-one coding platform by takeUforward. Ace your tech interviews with premium DSA, system design, and CS content.",
    siteName: "TUF+",
    images: [
      {
        url: "https://tufplus.surajv.me/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TUF+ - The Complete Coding Interview Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TUF+ | Master DSA, System Design & Core CS",
    description:
      "Practice 1000+ curated problems, mock interviews, LLD, OOPs, and system design all in one place. Powered by takeUforward.",
    creator: "@takeUforward",
    images: ["https://tufplus.surajv.me/opengraph-image.png"]
  },
  themeColor: "#ffffff"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
