import { ReactNode } from 'react';

import './PageContainer.css';

function PageContainer({ children }: { children: ReactNode }) {
  return <div className='page-wrapper'>{children}</div>;
}

export default PageContainer;
