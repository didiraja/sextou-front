import { Outlet } from 'react-router-dom';
import PageContainer from '../components/templates/PageContainer';
import MainContainer from '../components/templates/MainContainer';
import TopBlock from '../components/organisms/TopBlock';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';
import ScrollToTop from '../components/atoms/ScrollToTop';

function Template() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <PageContainer>
        <TopBlock />
        <MainContainer>
          <Outlet />
        </MainContainer>
        <Footer />
      </PageContainer>
    </>
  );
}

export default Template;
