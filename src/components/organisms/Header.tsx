import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles['header-wrapper']}>
      <Image src='/sextou.png' alt='Sextou! - Logo' width={142} height={50} />
      <div className={styles['menu']}>
        <Link
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/sextou.rio'
        >
          <button className='btn-secondary'>
            <Image
              width={24}
              height={24}
              src='/icon/insta.svg'
              alt='Instagram - Logo'
            />
          </button>
        </Link>
        <Link href='#'>
          <button className='btn-primary'>Lorem Ipsum</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
