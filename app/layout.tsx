import type { Metadata } from "next";
import { Kanit, } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: "DTI-SAU Calculator Varity",
  description: "เว็บรวบรวมเครื่องมือในการคำนวนต่างๆ",
  keywords: ["เครื่องคำนวน", "calculator", "moneyshare", "BMI", "BMR", "Car installemnet"],
  icons: {
    icon: "/next.svg",
  },
  authors: [
    {
      name: "Kla68"
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
