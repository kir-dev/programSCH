import './globals.css';

import type { Metadata } from 'next';

import Navbar from '@/components/navbar';

/*const inter = Inter({ subsets: ['latin'] });*/

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
      <body className='m-0'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
