import LayoutHome from "../components/organisms/Layout.Home";
import PageContainer from "../components/templates/PageContainer";
import MainContainer from "../components/templates/MainContainer";
import TopBlock from "../components/organisms/TopBlock";
import Footer from "../components/molecules/Footer";
import Modal from "../components/molecules/Modal";
import { useEffect, useState, useContext } from "react";
import { ModalProvider, context } from "../store";

function Home() {
  // const [modal, setModal] = useState(false);

  const { details } = useContext(context);

  console.log(details);

  return (
    <PageContainer>
      <TopBlock />

      {/* <button>{modal ? "Hide" : "Show"} Modal</button> */}

      <MainContainer>
        <LayoutHome />
      </MainContainer>

      <Footer />

      <ModalProvider>{/* <Modal /> */}</ModalProvider>
    </PageContainer>
  );
}

export default Home;
