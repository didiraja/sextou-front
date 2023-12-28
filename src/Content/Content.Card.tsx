import clsx from 'clsx';

import ButtonContent from '@/Content/components/C.Button';
import Categories from '@/Content/components/C.Categories';
import Cover from '@/Content/components/C.Cover';
import DateBlock from '@/Content/components/C.Date';
import Title from '@/Content/components/C.Title';
import { ContentProps } from '@/Content/types';

import styles from './Content.module.scss';

// TODO: use Next/Image
function ContentCard(props: ContentProps) {
  const { cover, title, categories } = props;

  return (
    <div className={clsx(styles['content'], styles['card-mode'])}>
      <div className={styles['upper']}>
        <Cover src={cover} alt={title} />

        <DateBlock {...props} />

        <Title className='max-two-lines'>{title}</Title>

        <Categories>{categories}</Categories>
      </div>

      <ButtonContent {...props} />
    </div>
  );
}

export default ContentCard;
