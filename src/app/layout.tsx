import "~/styles/globals.css";

import { GeistMono } from "geist/font/mono";

import { cn } from "~/utils/tailwind";
import { inter, interDisplay, generalSans } from "~/lib/fonts";

export const metadata = {
  title: "quadratic/ui",
  description: "Build your side project faster.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans",
          inter.variable,
          interDisplay.variable,
          generalSans.variable,
          GeistMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
