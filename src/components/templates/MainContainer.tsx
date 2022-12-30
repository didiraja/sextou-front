import { AppProps } from "../../types";
import "./MainContainer.pcss";

function MainContainer({ children }: AppProps): JSX.Element {
  return <main className="main-wrapper">{children}</main>;
}

export default MainContainer;
