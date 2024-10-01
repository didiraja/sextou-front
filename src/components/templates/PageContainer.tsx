import { ReactNode } from 'react';

import styles from './PageContainer.module.scss';

function PageContainer({ children }: { children: ReactNode }) {
  return <div className={styles['page-wrapper']}>{children}</div>;
}

export default PageContainer;
