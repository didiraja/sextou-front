import "./MainContainer.pcss";

function MainContainer({ children }) {
  return (
    <main className="main-wrapper">
      <children />
    </main>
  );
}

export default MainContainer;
