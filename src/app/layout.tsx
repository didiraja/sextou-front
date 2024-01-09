import { Metadata } from 'next';
import * as React from 'react';
import '@fontsource-variable/rubik';

import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import TopBlock from '@/components/organisms/TopBlock';
import MainContainer from '@/components/templates/MainContainer';
import PageContainer from '@/components/templates/PageContainer';
import { siteConfig } from '@/constant/config';

import '@/styles/globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Sextou!`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://sextou.rio',
  },
  icons: {
    icon: '/favicon/favicon.png',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: ['/sextou.png'],
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/sextou.png'],
    creator: '@didiraja',
  },
  authors: [
    {
      name: 'Dico Didiraja',
      url: 'https://www.linkedin.com/in/didiraja/',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt'>
      <head>
        {/* User Next/Script */}
        {/* <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-SDX7SEVRPM"
    ></script>
    <script type="module">
      if (import.meta.env.PROD) {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-SDX7SEVRPM');
      }
    </script> */}
      </head>
      <body>
        <Header />
        <PageContainer>
          <TopBlock />
          <MainContainer>{children}</MainContainer>
          <Footer />
        </PageContainer>
      </body>
    </html>
  );
}
