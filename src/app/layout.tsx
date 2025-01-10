import "~/styles/globals.css";

import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";

import { inter, interDisplay } from "~/utils/fonts";
import { getMenuItems } from "~/utils/docs";

import Header from "~/components/navigation/Header";
import Spotlight from "~/components/effects/Spotlight";
import { Toaster } from "~/components/ui/Toaster";

export const metadata: Metadata = {
  title: "quadratic/ui | Beautiful shadcn/ui components.",
  description:
    "Beautiful, slightly styled components to build your next side project faster. Built on shadcn/ui.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { primitivesMenuItems, rechartsMenuItems } = await getMenuItems();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interDisplay.variable} ${GeistMono.variable}`}
    >
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem={false}
        >
          <Header
            primitivesMenuItems={primitivesMenuItems}
            rechartsMenuItems={rechartsMenuItems}
          />
          <Spotlight />
          <main>{children}</main>
          <Toaster visibleToasts={10} />
        </ThemeProvider>
      </body>
    </html>
  );
}
