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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5L4X5V2G');
            `,
          }}
        />
      </head>
      <body>
      <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-5L4X5V2G`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <main>
          <div className="wrap">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
