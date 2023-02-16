import { RouterProvider } from 'react-router-dom';
import { zuStore } from '../store';
import router from '.';

import PageContainer from '../components/templates/PageContainer';
import MainContainer from '../components/templates/MainContainer';
import TopBlock from '../components/organisms/TopBlock';
import Footer from '../components/organisms/Footer';
import Modal from '../components/molecules/Modal';
import Header from '../components/organisms/Header';

function Template() {
  const showModal = zuStore((store: any) => store.showModal);

  return (
    <>
      <Header />
      <PageContainer>
        <TopBlock />

        {showModal ? <Modal /> : null}

        <MainContainer>
          <RouterProvider router={router} />
        </MainContainer>

        <Footer />
      </PageContainer>
    </>
  );
}

export default Template;
