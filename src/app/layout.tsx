'use client'

import React from 'react';
import '../styles/css/reset.css';
import '../styles/css/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <main>
          <div className="wrap">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}