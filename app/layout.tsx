import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Mistrz Kominiarski Jan Kowalski — czyszczenie, przeglądy, opinie",
  description:
    "Usługi kominiarskie: czyszczenie kominów, okresowe przeglądy, opinie kominiarskie, frezowanie i odbiory. Uprawniony mistrz kominiarski z 20-letnim doświadczeniem.",
  keywords: [
    "kominiarz",
    "czyszczenie kominów",
    "przegląd kominiarski",
    "opinia kominiarska",
    "frezowanie komina",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
