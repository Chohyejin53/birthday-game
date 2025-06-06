import "./globals.css";
import { Press_Start_2P } from "next/font/google";

const dotFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dot",
});

export const metadata = {
  title: "HAPPY BIRTHDAY YEJINEEEEEEE",
  description: "2025.06.06",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={dotFont.variable}>
      <body className="font-dot bg-black text-white">{children}</body>
    </html>
  );
}
