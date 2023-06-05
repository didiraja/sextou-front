import { Outlet } from 'react-router-dom';
import zuStore from '../store';

import PageContainer from '../components/templates/PageContainer';
import MainContainer from '../components/templates/MainContainer';
import TopBlock from '../components/organisms/TopBlock';
import Footer from '../components/organisms/Footer';
import Modal from '../components/molecules/Modal';
// import Header from '../components/organisms/Header';

function Template() {
  const showModal = zuStore((store: any) => store.showModal);

  return (
    <>
      {/* <Header /> */}
      <PageContainer>
        <TopBlock />

        {showModal ? <Modal /> : null}

        <MainContainer>
          <Outlet />
        </MainContainer>

        <Footer />
      </PageContainer>
    </>
  );
}

export default Template;
