import "./globals.css";
import { Inter } from "next/font/google";
import BottomNavigation from "./components/BottomNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Smart with Aaron",
  description: "Your mobile-first product discovery platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <main className="pb-16 min-h-screen">{children}</main>
        <BottomNavigation />
      </body>
    </html>
  );
}
