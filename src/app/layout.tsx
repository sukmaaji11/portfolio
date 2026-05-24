import './globals.css';
import { Inter } from 'next/font/google';
import { Manrope } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata = {
  title: 'Sukma Aji Yudantomo | Fullstack Developer',
  description:
    'Portfolio of Sukma Aji Yudantomo — Fullstack Developer building modern web applications, dashboards and digital products.',
  keywords: [
    'Fullstack Developer',
    'Next.js',
    'Laravel',
    'React',
    'Portfolio',
    'Sukma Aji',
  ],
  openGraph: {
    title: 'Sukma Aji Yudantomo',
    description: 'Fullstack Developer Portfolio',
    url: 'https://bra-dev.com',
    siteName: 'BRADEV',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
