import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Above & Beyond | Social Services",
  description: "VA fiduciary services and adult day health consulting, informed by over 20 years in home health administration.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
