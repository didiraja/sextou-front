import { AppProps } from "../../types";

const PageContainer = ({ children }: AppProps) => {
  return <div className="page-wrapper">{children}</div>;
};

export default PageContainer;
