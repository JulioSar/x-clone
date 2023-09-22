import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JX",
  description: "X-Clone by JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-900 min-h-screen flex">{children}</div>
      </body>
    </html>
  );
}
