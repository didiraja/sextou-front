import "./Pagination.pcss";
import Button from "./Button";

type PaginationProps = {
  totalItems: number;
  page: number;
  perPage?: number;
  onSelectPage?: (page: number) => void;
  onNext: () => void;
  onPrevious: () => void;
};

const Pagination = (props: PaginationProps) => {
  const {
    totalItems = 13,
    page = 1,
    perPage = 8,
    onNext,
    onPrevious,
    onSelectPage,
  } = props;

  const pagination = [...Array(Math.ceil(totalItems / perPage))];

  return (
    <div className="pagination">
      {page > 1 ? (
        <Button className="" onClick={() => onPrevious?.()}>
          {"<"}
        </Button>
      ) : null}
      {pagination.map((_, index) => {
        const label = index + 1;
        const active = label === page;

        return (
          <Button
            className={`btn-page ${active ? "active" : ""}`}
            key={index}
            onClick={() => (!active ? onSelectPage?.(label) : undefined)}
          >
            {label}
          </Button>
        );
      })}
      {page < pagination.length ? (
        <Button onClick={() => onNext?.()}>{">"}</Button>
      ) : null}
    </div>
  );
};

export default Pagination;