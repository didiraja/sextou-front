import LayoutHome from "../components/organisms/Layout.Home";
import PageContainer from "../components/templates/PageContainer";
import MainContainer from "../components/templates/MainContainer";
import TopBlock from "../components/organisms/TopBlock";
import Footer from "../components/molecules/Footer";
import Modal from "../components/molecules/Modal";
import { ModalContext, ModalStorage } from "../store";
import { ContextType, useContext } from "react";

function StorageWrapper() {
  const context: ContextType<any> = useContext(ModalContext);

  return <>{context.showModal ? <Modal /> : null}</>;
}

function Home() {
  const modalMethods = ModalStorage;

  return (
    <PageContainer>
      <TopBlock />

      <ModalStorage value={modalMethods}>
        <StorageWrapper />
      </ModalStorage>

      <MainContainer>
        <LayoutHome />
      </MainContainer>

      <Footer />
    </PageContainer>
  );
}

export default Home;
