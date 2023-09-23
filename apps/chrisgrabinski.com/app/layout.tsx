import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const maison = localFont({
  src: "./fonts/maison-regular.woff2",
  display: "swap",
  variable: "--font-maison",
});

export const metadata: Metadata = {
  title: "Chris Grabiński ・ Frontend Engineer",
  description:
    "Working with product teams to deliver beautiful, user‑friendly, and goal‑driven web experiences.",
  verification: {
    me: "https://mastodon.social/@chrisgrabinski",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={maison.variable}>
      <body className="font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
