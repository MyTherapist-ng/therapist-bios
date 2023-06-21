import Footer from "./components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyTherapist",
  description: "Portfolio for therapists",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='w-full flex flex-col justify-center items-center'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
