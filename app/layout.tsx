import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./refinements.css";
import "./backrooms.css";
import "./authentic-backrooms.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "cyrillic"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://posledniy-agency.s-eanwagner02532.chatgpt.site"),
  title: "Агентство Нас#лия — запуски Telegram-продуктов",
  description: "Продюсируем запуски Telegram-продуктов для экспертов: от идеи, оффера и прогрева до воронки и продаж.",
  openGraph: { title: "Агентство Нас#лия — продюсирование запусков", description: "Превращаем экспертизу и аудиторию в продукт и продажи через Telegram.", images: ["/hero-backrooms.png"] },
  twitter: { card: "summary_large_image", images: ["/hero-backrooms.png"] },
  icons: { icon: "/favicon-ahash.svg", shortcut: "/favicon-ahash.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
