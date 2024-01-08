import clsx from 'clsx';
import Link from 'next/link';

import ButtonContent from '@/Content/components/C.Button';
import Categories from '@/Content/components/C.Categories';
import Cover from '@/Content/components/C.Cover';
import DateBlock from '@/Content/components/C.Date';
import Title from '@/Content/components/C.Title';
import { ContentProps } from '@/Content/types';

import styles from './Content.module.scss';

// TODO: use Next/Image
function ContentCard(props: ContentProps) {
  const { cover, title, categories, slug } = props;

  return (
    <div className={clsx('h-event', styles['content'], styles['card-mode'])}>
      <div className={styles['upper']}>
        <Link href={`/event/${slug}`}>
          <Cover src={cover} alt={title} />

          <DateBlock {...props} />

          <Title className='p-name max-two-lines'>{title}</Title>
        </Link>

        <Categories>{categories}</Categories>
      </div>

      <ButtonContent {...props} />
    </div>
  );
}

export default ContentCard;
