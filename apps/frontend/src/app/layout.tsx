import './globals.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { Metadata } from 'next';

import Navbar from '@/components/navbar';
import { queryClient } from '@/util/query-client';

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
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </body>
    </html>
  );
}
