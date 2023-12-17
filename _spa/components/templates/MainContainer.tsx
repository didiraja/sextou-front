import { ChildrenOnly } from '../../types';
import './MainContainer.pcss';

function MainContainer({ children }: ChildrenOnly): JSX.Element {
  return <main className='main-wrapper'>{children}</main>;
}

export default MainContainer;
