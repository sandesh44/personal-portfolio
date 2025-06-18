import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe - Full Stack Developer | Portfolio',
  description: 'Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies. View my projects, skills, and get in touch.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'Portfolio', 'Web Development'],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    title: 'John Doe - Full Stack Developer Portfolio',
    description: 'Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies.',
    url: 'https://johndoe-portfolio.com',
    siteName: 'John Doe Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe - Full Stack Developer Portfolio',
    description: 'Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}