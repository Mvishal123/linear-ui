import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Linear.app",
  description: "A linear.app design by vishal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="bg-page-gradient pt-nav-height">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
