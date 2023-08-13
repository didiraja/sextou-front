/* eslint-disable @typescript-eslint/no-empty-function */
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import Button from './Button';
import {
  PER_PAGE,
} from '../../services/enums';
import './Pagination.pcss';

type PaginationProps = {
  totalItems: number;
  perPage?: number;
  onSelectPage?: (page: number) => void;
  onNext: () => void;
  onPrevious: () => void;
};

function Pagination(props: PaginationProps) {
  const {
    totalItems = PER_PAGE,
    perPage = PER_PAGE,
    onNext,
    onPrevious,
    onSelectPage,
  } = props;

  const { page: pageParam } = useParams();

  const page = Number(pageParam) || 1;

  const pagination = [...Array(Math.ceil(totalItems / perPage))];

  return (
    <div className="pagination">
      {page > 1 ? (
        <Button href={`/page/${page - 1}`}>
          {'<'}
        </Button>
      ) : null}

      {pagination.map((_, index) => {
        const pos = index + 1;
        const active = page === pos;

        return (
          // href={`/page/${pos}`}
          <Button
            className={classNames({
              active,
            })}
            key={index}
          >
            {pos}
          </Button>
        );
      })}

      {page < pagination.length ? (
        <Button
          href={`/page/${page + 1}`}
        >
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
