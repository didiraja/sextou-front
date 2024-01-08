import clsx from 'clsx';

import styles from '../Content.module.scss';

const ContentTitle = ({
  tag,
  children,
  className,
}: {
  tag?: string;
  children: string;
  className?: string;
}) => {
  const Tag = tag || 'h3';

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Tag className={clsx(styles['title'], className)}>{children}</Tag>;
};

export default ContentTitle;
