import { useState } from "react";
import LayoutHome from "../components/organisms/Layout.Home";
import PageContainer from "../components/templates/PageContainer";
import MainContainer from "../components/templates/MainContainer";
import TopBlock from "../components/organisms/TopBlock";
import Footer from "../components/molecules/Footer";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <PageContainer>
      <TopBlock />

      <MainContainer>
        <LayoutHome />
      </MainContainer>

      <Footer />

      {/* {#if $appConfig.showModal}
			<Modal on:close={() => toggleModal()} />
		{/if} */}
    </PageContainer>
  );
}
export default Home;
