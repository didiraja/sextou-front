import "./Pagination.pcss";
import Button from "./Button";

type PaginationProps = {
  totalItems: number;
  page: number;
  perPage: number;
  onNext: () => void;
  onPrevious: () => void;
};

const Pagination = (props: PaginationProps) => {
  const { totalItems = 13, page = 1, perPage = 8, onNext, onPrevious } = props;

  const pagination = [...Array(Math.ceil(totalItems / perPage))];

  return (
    <div className="pagination">
      <Button className="" onClick={() => onNext?.()}>
        {"<"}
      </Button>
      {pagination.map((_, index) => {
        const label = index + 1;

        return (
          <Button
            className={`btn-page ${label === page ? "active" : ""}`}
            key={index}
          >
            {label}
          </Button>
        );
      })}
      <Button onClick={() => onPrevious?.()}>{">"}</Button>
    </div>
  );
};

export default Pagination;
