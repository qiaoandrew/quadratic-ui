import "~/styles/globals.css";

import { ThemeProvider } from "next-themes";
import { GeistMono } from "geist/font/mono";

import Header from "./_components/Header";
import { Toaster } from "~/components/ui/Toast";

import { cn } from "~/utils/tailwind";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("font-sans", GeistMono.variable)}
        suppressHydrationWarning
      >
        <ThemeProvider
          defaultTheme="dark"
          enableSystem={false}
          attribute="class"
        >
          <Header />
          <main>{children}</main>
          <Toaster richColors visibleToasts={10} />
        </ThemeProvider>
      </body>
    </html>
  );
}
