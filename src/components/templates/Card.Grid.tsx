import "./CardGrid.pcss";

function CardGrid({ children }) {
  return (
    <main className="card-grid">
      <children />
    </main>
  );
}

export default CardGrid;
