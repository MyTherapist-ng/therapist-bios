import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "600"],
  variable: "--font-jakarta",
});

export const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700", "600"],
  variable: "--font-grotesk",
});