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

function Pagination(props: PaginationProps) {
  const {
    totalItems = 13,
    page = 1,
    perPage = 12,
    onNext,
    onPrevious,
    onSelectPage,
  } = props;

  const pagination = [...Array(Math.ceil(totalItems / perPage))];

  const previousPageAction = (evt: Event) => {
    evt.preventDefault();

    onPrevious?.();
  };

  const nextPageAction = (evt: Event) => {
    evt.preventDefault();

    onNext?.();
  };

  const selectPageAction = (
    evt: Event,
    pageData: { active: boolean; label: number }
  ) => {
    evt.preventDefault();

    if (!pageData.active) {
      return onSelectPage?.(pageData.label);
    }

    return undefined;
  };

  return (
    <div className="pagination">
      {page > 1 ? (
        <Button className="btn-page" onClick={(evt) => previousPageAction(evt)}>
          {"<"}
        </Button>
      ) : null}
      {pagination.map((_, index) => {
        const label = index + 1;
        const active = label === page;
        // const limit = page + 4;

        // if (index <= limit)
        return (
          <Button
            className={`btn-page ${active ? "active" : ""}`}
            key={index}
            onClick={(evt) => selectPageAction(evt, { active, label })}
          >
            {label}
          </Button>
        );
      })}
      {page < pagination.length ? (
        <Button className="btn-page" onClick={(evt) => nextPageAction(evt)}>
          {">"}
        </Button>
      ) : null}
    </div>
  );
}

Pagination.defaultProps = {
  perPage: 12,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSelectPage: () => {},
};

export default Pagination;
