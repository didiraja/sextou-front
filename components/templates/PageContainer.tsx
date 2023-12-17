import { ChildrenOnly } from '../../types';
import './PageContainer.pcss';

function PageContainer({ children }: ChildrenOnly) {
  return <div className="page-wrapper">{children}</div>;
}

export default PageContainer;
