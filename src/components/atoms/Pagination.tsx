/* eslint-disable @typescript-eslint/no-empty-function */
import { useParams, Link } from 'react-router-dom';
import classNames from 'classnames';
import Button from './Button';
import {
  PER_PAGE,
} from '../../services/enums';
import './Pagination.pcss';

type PaginationProps = {
  totalItems: number;
  perPage?: number;
};

function Pagination(props: PaginationProps) {
  const {
    totalItems = PER_PAGE,
    perPage = PER_PAGE,
  } = props;

  const { page: pageParam } = useParams();

  const page = Number(pageParam) || 1;

  const pagination = [...Array(Math.ceil(totalItems / perPage))];

  return (
    <div className="pagination">
      {page > 1 ? (
        <Link to={`/page/${page - 1}`}>
          <Button>{'<'}</Button>
        </Link>
      ) : null}

      {pagination.map((_, index) => {
        const pos = index + 1;
        const active = page === pos;

        return (
          <Link to={`/page/${pos}`} key={index}>
            <Button className={classNames({ active })}>
              {pos}
            </Button>
          </Link>
        );
      })}

      {page < pagination.length ? (
        <Link to={`/page/${page + 1}`}>
          <Button>{'>'}</Button>
        </Link>
      ) : null}
    </div>
  );
}

Pagination.defaultProps = {
  perPage: PER_PAGE,
};

export default Pagination;
