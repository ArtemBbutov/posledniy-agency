import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "cyrillic"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://posledniy-agency.s-eanwagner02532.chatgpt.site"),
  title: "Агентство насилия — продюсерское агентство",
  description: "Продюсируем Telegram-каналы и запуски для экспертов и авторов.",
  openGraph: { title: "Агентство насилия", description: "Telegram-каналы, контент, рост аудитории и запуски под ключ.", images: ["/og-telegram.png"] },
  twitter: { card: "summary_large_image", images: ["/og-telegram.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
