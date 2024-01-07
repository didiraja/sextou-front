import clsx from 'clsx';
import Image from 'next/image';

import { WPCoverObject } from '@/Content/types';
import { HOST } from '@/services/enums';

import styles from '../Content.module.scss';

const ContentCover = ({ src }: { src: WPCoverObject }) => {
  return (
    <Image
      className={clsx(styles['cover'])}
      width={src.width}
      height={src.height}
      src={`${HOST}/wp-content/uploads/${src.file}`}
      alt={src.image_meta.caption}
    />
  );
};

export default ContentCover;
