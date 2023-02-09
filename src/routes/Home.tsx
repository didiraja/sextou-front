import { ModalContext, ModalStorage } from "../store";
import { zuStore } from "../store";
import { ContextType, useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from ".";

import PageContainer from "../components/templates/PageContainer";
import MainContainer from "../components/templates/MainContainer";
import TopBlock from "../components/organisms/TopBlock";
import Footer from "../components/organisms/Footer";
import Modal from "../components/molecules/Modal";
import Header from "../components/organisms/Header";

function Home() {
  const modalMethods = ModalStorage;
  // const { showModal } = useContext(ModalContext);
  const showModal = zuStore((store: any) => store.showModal);

  return (
    <>
      <Header />
      <PageContainer>
        <TopBlock />

        {showModal ? <Modal /> : null}

        {/* <ModalStorage value={modalMethods}> */}
        <MainContainer>
          <RouterProvider router={router} />
        </MainContainer>
        {/* </ModalStorage> */}

        <Footer />
      </PageContainer>
    </>
  );
}

export default Home;
