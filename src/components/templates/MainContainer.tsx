import { ReactNode } from 'react';

import styles from './MainContainer.module.scss';

function MainContainer({ children }: { children: ReactNode }): JSX.Element {
  return <main className={styles['main-wrapper']}>{children}</main>;
}

export default MainContainer;
