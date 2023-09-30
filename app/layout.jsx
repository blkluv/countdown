import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CountDown App",
  description: "Event countdown app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={inter.className}>
        <Provider> {children}</Provider>
      </body>
    </html>
  );
}
