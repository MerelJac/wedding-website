import { Amatic_SC, Raleway } from "next/font/google";
import "./globals.css";

const amatic = Amatic_SC({
  variable: "--font-amatic",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Merel & Matthew",
  description: "Wedding celebration for Merel & Matthew — August 8, 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${amatic.variable} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
