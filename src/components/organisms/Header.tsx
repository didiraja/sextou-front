import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles['header-wrapper']}>
      <div className={styles['header-menu']}>
        <div className={styles['header-menu--common']}>
          <Image
            src='/sextou.png'
            alt='Sextou! - Logo'
            width={142}
            height={50}
          />
          <div className='flex gap-3'>
            <Link
              className='btn-secondary block'
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/sextou.rio'
            >
              <Image
                width={24}
                height={24}
                src='/icon/insta.svg'
                alt='Instagram - Logo'
              />
            </Link>
            <Link className='btn-primary block' href='#'>
              Recomendar evento
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
