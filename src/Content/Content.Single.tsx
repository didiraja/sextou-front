/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-danger */
import clsx from 'clsx';

import ButtonContent from '@/Content/components/C.Button';
import Categories from '@/Content/components/C.Categories';
import Cover from '@/Content/components/C.Cover';
import DateBlock from '@/Content/components/C.Date';
import Description from '@/Content/components/C.Description';
import Title from '@/Content/components/C.Title';
import { ContentProps } from '@/Content/types';

import styles from './Content.module.scss';

function ContentSingle(props: ContentProps) {
  const { cover, title, categories, description } = props;

  return (
    <div className={clsx(styles['content'], styles['single-mode'])}>
      <div className={clsx(styles['subheader'])}>
        <DateBlock {...props} />

        <Title>{title}</Title>

        <Categories>{categories}</Categories>

        <ButtonContent {...props} />
      </div>

      <Cover src={cover} alt={title} />

      <Description description={description} />
    </div>
  );
}

export default ContentSingle;
