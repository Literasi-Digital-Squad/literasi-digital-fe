import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // Variabel CSS untuk Tailwind
});

export const metadata = {
  title: "DOME PDU - Drilling Online Monitoring Environment",
  description:
    "Platform pemantauan pengeboran secara online yang menyediakan data real-time dan analisis untuk meningkatkan efisiensi dan keamanan operasional pengeboran.",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${poppins.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}