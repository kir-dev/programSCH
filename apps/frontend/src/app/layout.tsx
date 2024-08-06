import './globals.css';

import type { Metadata } from 'next';

import Navbar from '@/components/navbar';
import { EventDetailsPage } from '@/pages/event/EventDetailsPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@/app/page';

/*const inter = Inter({ subsets: ['latin'] });*/
import NewEvent from '@/pages/event/newEvent';

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
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/events/'>
              <Route index element={<Home />} />
              <Route path='new' element={<NewEvent />} />
              <Route path=':eventId' element={<EventDetailsPage />} />
            </Route>
          </Route>
        </Routes>
      </body>
    </html>
  );
}
