import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/navbar';
import { Footer } from '@/components/footer';
import './globals.css';
import { notFound } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern E-commerce',
  description: 'Professional e-commerce platform with full admin capabilities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <SessionProvider>
            <main className="flex-1 bg-background">
                {children}
              </main>
              </SessionProvider>
              <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}