import clsx from 'clsx';
import { ReactNode } from 'react';

import styles from './Title.module.scss';

type TitleProps = {
  tag?: string;
  className?: string;
  children: ReactNode;
};

function Title({ tag, className, children }: TitleProps) {
  const Tag = tag || 'h2';

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Tag className={clsx({ title: true }, styles.section_title, className)}>
      {children}
    </Tag>
  );
}

export default Title;
