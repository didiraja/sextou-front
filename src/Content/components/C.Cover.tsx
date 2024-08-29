import clsx from 'clsx';
import Image from 'next/image';

import { WPCoverObject } from '@/Content/types';
import { HOST } from '@/services/enums';

import styles from '../Content.module.scss';

const ContentCover = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image
      className={clsx(styles['cover'])}
      // width={src.width}
      // height={src.height}
      src={src}
      alt={alt}
    />
  );
};

export default ContentCover;
