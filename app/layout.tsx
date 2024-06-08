import type { Metadata } from "next";
import "@/styles/main.scss";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Aldi's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
