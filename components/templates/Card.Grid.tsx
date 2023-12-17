import { ChildrenOnly } from '../../types';
import './Card.Grid.pcss';

function CardGrid({ children }: ChildrenOnly): JSX.Element {
  return <main className="card-grid">{children}</main>;
}

export default CardGrid;
