import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Reverie Engineering',
  description: 'Engineering a Brighter Future',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
