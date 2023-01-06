import LayoutHome from "../components/organisms/Layout.Home";
import PageContainer from "../components/templates/PageContainer";
import MainContainer from "../components/templates/MainContainer";
import TopBlock from "../components/organisms/TopBlock";
import Footer from "../components/molecules/Footer";
import Modal from "../components/molecules/Modal";
import { ModalContext, ModalStorage } from "../store";
import { ContextType, useContext } from "react";

function Wrapped() {
  const context: ContextType<any> = useContext(ModalContext);

  return (
    <>
      <button onClick={() => context.setModal((show: boolean) => !show)}>
        Mostrar/Tirar Modal
      </button>

      {context.showModal ? <Modal /> : null}
    </>
  );
}

function Home() {
  const modalMethods = ModalStorage;

  return (
    <PageContainer>
      <TopBlock />

      <ModalStorage value={modalMethods}>
        <Wrapped />
      </ModalStorage>

      <MainContainer>
        <LayoutHome />
      </MainContainer>

      <Footer />
    </PageContainer>
  );
}

export default Home;
