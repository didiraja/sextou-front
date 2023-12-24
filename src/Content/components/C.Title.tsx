import clsx from 'clsx';

import styles from '../Content.module.scss';

const ContentTitle = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return <div className={clsx(styles['title'], className)}>{children}</div>;
};

export default ContentTitle;
