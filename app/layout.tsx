import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "./_components/ThemeProvider";
import { Analytics } from '@vercel/analytics/next';

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "Adrian - %s",
    default: "Adrian - Skilled Web Developer",
  },
  description:
    "Adrian Cosentino, full-stack engineer. Creating stunning and highly functional software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.className} antialiased bg-white dark:bg-dark-100 text-dark-200 dark:text-stone-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
