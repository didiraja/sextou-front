import { AppProps } from "../../types";
import "./Card.Grid.pcss";

function CardGrid({ children }: AppProps): JSX.Element {
  return <main className="card-grid">{children}</main>;
}

export default CardGrid;
