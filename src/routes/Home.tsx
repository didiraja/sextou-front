import { ModalContext, ModalStorage } from "../store";
import { ContextType, useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from ".";

import PageContainer from "../components/templates/PageContainer";
import MainContainer from "../components/templates/MainContainer";
import TopBlock from "../components/organisms/TopBlock";
import Footer from "../components/molecules/Footer";
import Modal from "../components/molecules/Modal";
import Header from "../components/molecules/Header";

function Home() {
  const modalMethods = ModalStorage;

  return (
    <>
      <Header />
      <PageContainer>
        <TopBlock />

        <ModalStorage value={modalMethods}>
          {/* <ModalWithContext /> */}

          <MainContainer>
            <RouterProvider router={router} />
          </MainContainer>
        </ModalStorage>

        <Footer />
      </PageContainer>
    </>
  );
}

export default Home;
