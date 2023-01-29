import "./Card.Loading.pcss";

const CardLoading = () => {
  return (
    <div className="card">
      <div className="placeholder-cover" />

      <div className="placeholder-date" />

      <div className="placeholder-title" />

      <div className="placeholder-section">
        <div className="category" />
        <div className="category" />
        <div className="category" />
      </div>

      <div className="placeholder-button" />
    </div>
  );
};

export default CardLoading;
