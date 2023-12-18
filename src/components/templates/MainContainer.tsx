import { ReactNode } from 'react';

import './MainContainer.css';

function MainContainer({ children }: { children: ReactNode }): JSX.Element {
  return <main className='main-wrapper'>{children}</main>;
}

export default MainContainer;
