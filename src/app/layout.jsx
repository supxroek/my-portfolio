import "./globals.css";
import { robotoMono } from "./fonts";

export const metadata = {
  title: "Portfolio - Suparoek Manajit",
  description: "My portfolio website - Suparoek Manajit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} bg-[#0f1115] text-white`}>
        {children}
      </body>
    </html>
  );
}
