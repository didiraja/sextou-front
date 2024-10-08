import clsx from 'clsx';
import Link from 'next/link';

import Button from '@/components/atoms/Button';
import { WPTermObject } from '@/Content/types';

import styles from '../Content.module.scss';

const ContentCategories = ({ children }: { children: WPTermObject[] }) => {
  return (
    <div className={clsx(styles['categories-wrapper'])}>
      {children.map((item: WPTermObject) => (
        <Link
          key={item.term_id}
          className='p-category'
          target='_self'
          href={`/category/${item.slug}`}
        >
          <Button pill>{item.name}</Button>
        </Link>
      )) ?? null}
    </div>
  );
};

export default ContentCategories;
