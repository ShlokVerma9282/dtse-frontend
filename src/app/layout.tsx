import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Providers } from "@/store/providers";


export const metadata: Metadata = {
  title: "DTSE",
  description: "DTSE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Providers>
          <div className="flex">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
