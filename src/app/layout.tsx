import LocaleSwitcher from "@/components/local-switcher/local-switcher";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travelers Blog",
  description: "Page for people who love to travel",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pl-PL" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en" | "pl-PL" };
}>) {
  
  return (
    <html lang={params.lang}>
      <body className={openSans.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        <LocaleSwitcher/>
      </body>
    </html>
  );
}
