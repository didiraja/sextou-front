import IconInsta from '@/components/icons/Insta';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles['header-wrapper']}>
      <div className={styles['header-menu']}>
        <ul className={styles['header-menu--common']}>
          <li>
            <IconInsta />
            <a
              className={styles['menu-link']}
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/sextou.rio/'
            >
              Siga-nos no Instagram! Agenda semanal de eventos.
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
