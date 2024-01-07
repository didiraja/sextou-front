import clsx from 'clsx';
import Link from 'next/link';

import Button from '@/components/atoms/Button';

import styles from './Pagination.module.scss';

type PaginationProps = {
  page: number;
  perPage?: number;
  totalItems: number;
};

function Pagination(props: PaginationProps) {
  const { page, perPage = 12, totalItems } = props;

  const pagination = [...Array(Math.ceil(totalItems / perPage))];

  return (
    <div className={styles['pagination']}>
      {page > 1 ? (
        <Link href={`?page=${page - 1}`}>
          <Button className={styles['button']}>{'<'}</Button>
        </Link>
      ) : null}

      {pagination.map((_, index) => {
        const pos = index + 1;
        const active = page === pos;

        return (
          <Link href={`?page=${pos}`} key={index}>
            <Button
              className={clsx(styles['button'], active && styles['active'])}
            >
              {pos}
            </Button>
          </Link>
        );
      })}

      {page < pagination.length ? (
        <Link href={`?page=${page + 1}`}>
          <Button className={styles['button']}>{'>'}</Button>
        </Link>
      ) : null}
    </div>
  );
}

export default Pagination;
