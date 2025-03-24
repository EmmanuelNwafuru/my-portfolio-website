import { ThemeSwitcher } from "@/components/theme-switcher";

import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import NavBar from "./(root)/Navbar";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const diatype = localFont({
  src: [
    {
      path: "../public/fonts/diatype/Diatype-thin.woff2",
      weight: "200",
      style: "thin",
    },
    {
      path: "../public/fonts/diatype/Diatype-light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/diatype/Diatype.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/diatype/Diatype-medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/diatype/Diatype-bold.woff2",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-diatype",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Anuel's Web Development Portfolio",
  description:
    "Build a website to showcase your products and services to billions of users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body
        className={`${diatype.variable} ${diatype.className} bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center max-w-[1440px] overflow-hidden">
            <div className="flex-1 w-full flex flex-col items-center">
              <div className="w-full sticky top-0 backdrop-blur-md z-50">
                <NavBar />
              </div>
              <div className="flex flex-col gap-20 w-full">{children}</div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-2 fixed bottom-0">
                <p>
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                </p>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
