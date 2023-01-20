import { ChildrenOnly } from "../../types";
import "./PageContainer.pcss";

const PageContainer = ({ children }: ChildrenOnly) => {
  return <div className="page-wrapper">{children}</div>;
};

export default PageContainer;
