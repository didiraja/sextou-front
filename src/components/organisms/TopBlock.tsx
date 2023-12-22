import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import styles from './TopBlock.module.scss';

function TopBlock() {
  return (
    <section id='top' className={clsx('grid', 'grid-cols-1', styles['top'])}>
      <Link href='/'>
        <Image
          className={styles['sextou-logo']}
          src='/sextou.png'
          alt='Sextou! - Logo'
          width={669}
          height={253}
        />
      </Link>
    </section>
  );
}

export default TopBlock;
