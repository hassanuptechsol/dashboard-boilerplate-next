// /app/layout.tsx

import Sidebar from "@/components/sidebar";
import "./globals.css"; // if you have any global css
import { ReactNode } from "react";

export const metadata = {
  title: "My App",
  description: "A beautiful Next.js app",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
