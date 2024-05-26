import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/custom_component/AuthProvider";
import NavBar from "@/custom_component/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apartment Manager",
  description: "An one stop solution for apartment management related problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <div className="flex flex-col h-screen bg-primary-foreground text-foreground dark">
            <NavBar/>
            <div className="flex-grow overflow-y-auto">
              {children}
            </div>
            
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
