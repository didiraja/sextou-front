import * as React from 'react';
import '@fontsource-variable/rubik';

import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import TopBlock from '@/components/organisms/TopBlock';
import MainContainer from '@/components/templates/MainContainer';
import PageContainer from '@/components/templates/PageContainer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <PageContainer>
        <TopBlock />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </PageContainer>
    </>
  );
}
