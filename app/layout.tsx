import "./globals.css";
import { UserProvider } from "./context/userContext";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "600"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "MyTherapist.ng Therapist Finder",
  description: "My Portfolio"
};

/**
 * The root layout component for the app.
 *
 * This component renders the root html and body elements and provides the
 * UserProvider context to all child components.
 *
 * It also sets the Jakarata font as the default font for the app.
 *
 * @param {React.ReactNode} children - The child components of the layout.
 * @returns {JSX.Element} The root layout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={` ${jakarta.className} w-full flex flex-col justify-center items-center`}
        >
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
