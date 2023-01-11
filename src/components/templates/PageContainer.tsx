import { ChildrenOnly } from "../../types";

const PageContainer = ({ children }: ChildrenOnly) => {
  return <div className="page-wrapper">{children}</div>;
};

export default PageContainer;
