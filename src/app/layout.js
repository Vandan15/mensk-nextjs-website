import ContextProvider from "@/context/ContextProvider";
// import { Catamaran } from "next/font/google";
import "@/vendors/animate/animate.min.css";
import "@/vendors/animate/custom-animate.css";
import "@/vendors/fontawesome/css/all.min.css";
import "@/vendors/oslim-icons/style.css";
import "@/vendors/reey-font/stylesheet.css";
import "@/vendors/the-sayinistic-font/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "jarallax/dist/jarallax.css";
import "tiny-slider/dist/tiny-slider.css";

// extra css
import "@/styles/style.css";
import "@/styles/responsive.css";
import "@/styles/blog-content.css";

// const catamaran = Catamaran({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   display: "swap",
// });

export const metadata = {
  title: "No.1 law & Commerce Consultancy Firm in UAE | Mensk Consultancy",
  description: "Elevate your business strategy with MENSK Consultancy&#039;s specialized services in Marketing, HR, Management, and AI consultancy.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "No.1 law & Commerce Consultancy Firm in UAE | Mensk Consultancy",
    description: "Elevate your business strategy with MENSK Consultancy's specialized services in Marketing, HR, Management, and AI consultancy.",
    url: "https://menskconsultancy.com",
    siteName: "Mensk Consultancy",
    images: [
      {
        url: "/assets/images/og/og-mensk.jpg",
        width: 1200,
        height: 630,
        alt: "Mensk Consultancy - UAE Business Consultancy Firm",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No.1 law & Commerce Consultancy Firm in UAE | Mensk Consultancy",
    description: "Elevate your business strategy with MENSK Consultancy's specialized services in Marketing, HR, Management, and AI consultancy.",
    images: ["/assets/images/og/og-mensk.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}