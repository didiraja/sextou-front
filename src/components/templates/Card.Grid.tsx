import { ReactNode } from 'react';

import styles from './Card.Grid.module.scss';

function CardGrid({ children }: { children: ReactNode }): JSX.Element {
  return <main className={styles['card-grid']}>{children}</main>;
}

export default CardGrid;
