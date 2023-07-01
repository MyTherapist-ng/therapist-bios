import Footer from "./components/footer/Footer";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "600"],
  variable: "--font-jakarta",
});


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
      <body className={` ${jakarta.className} w-full flex flex-col justify-center items-center`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
