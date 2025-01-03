import "~/styles/globals.css";

import { type Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";

import { inter, interDisplay } from "~/utils/fonts";

import Header from "~/components/header/Header";
import Spotlight from "~/components/effects/Spotlight";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
          <Header />
          <Spotlight />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
