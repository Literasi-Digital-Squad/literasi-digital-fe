import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // Variabel CSS untuk Tailwind
});

export const metadata = {
  title: "Cakap Digital",
  description:
    "Website asesmen digital untuk mengenal tingkat literasi digital anda",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${poppins.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}