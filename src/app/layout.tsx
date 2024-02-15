import type { Metadata } from "next";
import ThemeToggle from "@/components/molecules/theme-toggle";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Authenticator Application",
  description:
    "Simple web application for the easy generator frontend assessment test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
