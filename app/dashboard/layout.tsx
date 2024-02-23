// components/DashboardLayout.tsx
import React from 'react';
import { Providers } from '@/app/providers';
import clsx from 'clsx';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={clsx('min-h-screen bg-background font-sans antialiased')}>
      <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
        <div className="relative flex flex-col h-screen">
          {/* Dashboard-specific header */}
          <header>
            {/* Dashboard header content */}
          </header>
          <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
            {children}
          </main>
          <footer className="w-full flex items-center justify-center py-3">
            {/* Dashboard footer content */}
          </footer>
        </div>
      </Providers>
    </div>
  );
}
