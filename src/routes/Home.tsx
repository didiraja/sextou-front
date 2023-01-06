import LayoutHome from "../components/organisms/Layout.Home";
import PageContainer from "../components/templates/PageContainer";
import MainContainer from "../components/templates/MainContainer";
import TopBlock from "../components/organisms/TopBlock";
import Footer from "../components/molecules/Footer";
import Modal from "../components/molecules/Modal";
import { ModalContext, ModalStorage } from "../store";
import { ContextType, useContext } from "react";

function Home() {
  const context = ModalStorage;

  return (
    <ModalStorage value={{ ...context }}>
      <Wrapped />
    </ModalStorage>
  );
}

function Wrapped() {
  const context: ContextType<any> = useContext(ModalContext);

  console.log(context);

  return (
    <PageContainer>
      <TopBlock />

      <button onClick={() => context.setModal((show: boolean) => !show)}>
        Mostrar/Tirar Modal
      </button>

      {context.showModal ? (
        <div className="test-context">
          <p>{context.content.title.rendered}</p>
        </div>
      ) : null}

      <MainContainer>
        <LayoutHome />
      </MainContainer>

      <Footer />
    </PageContainer>
  );
}

export default Home;
