import clsx from 'clsx';
import Link from 'next/link';

import Button from '@/components/atoms/Button';
import ButtonContent from '@/Content/components/C.Button';
import DateBlock from '@/Content/components/C.Date';
import Title from '@/Content/components/C.Title';
import { ContentProps, WPTermObject } from '@/Content/types';

import styles from './Content.module.scss';

// TODO: use Next/Image
function Content(props: ContentProps) {
  const { onClick, cover, title, categories } = props;

  return (
    <div
      className={clsx(styles['content'], styles['card-mode'])}
      onClick={onClick}
    >
      <img
        className={clsx(styles['cover-surface'], styles['cover'])}
        src={cover}
        alt={title}
      />

      <DateBlock {...props} />

      <Title className='max-two-lines'>{title}</Title>

      <div className={styles['subheader']}>
        <div data-testid='categories' className={styles['categories-wrapper']}>
          {categories?.map((item: WPTermObject) => (
            <Link
              key={item.term_id}
              target='_self'
              href={`/category/${item.slug}`}
            >
              <Button pill>{item.name}</Button>
            </Link>
          )) ?? null}
        </div>
      </div>

      <ButtonContent {...props} />
    </div>
  );
}

export default Content;
