import { Titillium_Web } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Titillium_Web({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "F1 Dashboard",
  description: "Your ultimate Formula 1 dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
