import { Instrument_Serif, Funnel_Display, Funnel_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display",
});

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-funnel-sans",
});

export const metadata = {
  title: "Slabs Vinyl Supply",
  description: "Deep archive. New condition. No filler.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${funnelDisplay.variable} ${funnelSans.variable}`}>
      <body className="bg-slabs-surface text-slabs-text font-sans antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
