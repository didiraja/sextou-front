import clsx from 'clsx';

import styles from '../Content.module.scss';

const ContentCover = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img
      className={clsx(styles['cover-surface'], styles['cover'])}
      src={src}
      alt={alt}
    />
  );
};

export default ContentCover;
