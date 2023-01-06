import { ModalContext, ModalStorage } from "../store";
import { ContextType, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LayoutHome from "../components/organisms/Layout.Home";
import PageContainer from "../components/templates/PageContainer";
import MainContainer from "../components/templates/MainContainer";
import TopBlock from "../components/organisms/TopBlock";
import Footer from "../components/molecules/Footer";
import Modal from "../components/molecules/Modal";
import About from "./About";

function ModalWithContext() {
  const { showModal }: ContextType<any> = useContext(ModalContext);

  return showModal ? <Modal /> : null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function Home() {
  const modalMethods = ModalStorage;

  return (
    <PageContainer>
      <TopBlock />

      <ModalStorage value={modalMethods}>
        <ModalWithContext />

        <MainContainer>
          <RouterProvider router={router} />
        </MainContainer>
      </ModalStorage>

      <Footer />
    </PageContainer>
  );
}

export default Home;
