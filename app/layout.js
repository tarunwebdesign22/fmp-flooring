import { Poppins } from "next/font/google";
import Script from "next/script";
import InitialPageLoader from "@/components/InitialPageLoader";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "FMP Flooring",
  description: "FMP Flooring — quality flooring for every space",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <InitialPageLoader />
        {children}
        <ScrollToTopButton />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          strategy="afterInteractive"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6abac794e46af600dd568e85"
        />
      </body>
    </html>
  );
}
