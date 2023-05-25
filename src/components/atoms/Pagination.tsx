/* eslint-disable @typescript-eslint/no-empty-function */
import './Pagination.pcss';
import Button from './Button';
import {
  PER_PAGE,
} from '../../services/enums';

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
    totalItems = PER_PAGE,
    page = 1,
    perPage = PER_PAGE,
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
    selected: number,
  ) => {
    evt.preventDefault();

    onSelectPage?.(selected);
  };

  return (
    <div className="pagination">
      {page > 1 ? (
        <Button className="btn-page" onClick={(evt) => previousPageAction(evt)}>
          {'<'}
        </Button>
      ) : null}

      {pagination.map((_, index) => {
        const label = index + 1;
        const active = label === page;

        return (
          <Button
            className={`btn-page ${active ? 'active' : ''}`}
            key={index}
            onClick={(evt) => selectPageAction(evt, label)}
          >
            {label}
          </Button>
        );
      })}

      {page < pagination.length ? (
        <Button className="btn-page" onClick={(evt) => nextPageAction(evt)}>
          {'>'}
        </Button>
      ) : null}
    </div>
  );
}

Pagination.defaultProps = {
  perPage: PER_PAGE,
  onSelectPage: () => { },
};

export default Pagination;
