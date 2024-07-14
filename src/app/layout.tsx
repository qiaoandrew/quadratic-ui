import "~/styles/globals.css";

import { ThemeProvider } from "next-themes";
import { GeistMono } from "geist/font/mono";

import Header from "./_components/Header";
import { Toaster } from "~/components/ui/Toast";

import { cn } from "~/utils/tailwind";

export const metadata = {
  title: "quadratic/ui",
  description: "The fastest way to build your next project.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth font-sans antialiased", GeistMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          defaultTheme="dark"
          enableSystem={false}
          attribute="class"
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Toaster visibleToasts={10} />
        </ThemeProvider>
      </body>
    </html>
  );
}
