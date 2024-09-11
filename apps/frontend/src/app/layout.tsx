import './globals.css';

import type { Metadata } from 'next';

import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'ProgramSCH',
  description: 'created by KirDev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='hu'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
