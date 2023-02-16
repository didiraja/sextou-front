import { WPTermObject } from '../../types';
import Content from '../atoms/Content';
import './Card.pcss';

export type CardProps = {
  highlight?: boolean;
  id: number;
  title: string;
  event_date: string;
  categories: Array<WPTermObject>;
  cover: string;
  tickets?: string;
  free?: boolean;
  content: string;
  description: string;
  onClick?: (props: CardProps) => void;
};

export type reducerProps = {
  evt?: React.MouseEvent<HTMLDivElement, MouseEvent> & {
    target: { className: string };
  };
  action: any;
};

function Card(props: CardProps) {
  // function goTo(url: string) {
  //   return () => {
  //     window.location.href = url;
  //   };
  // }

  // function handleClickReducer({ evt, action }: reducerProps) {
  //   // console.log(evt, action);

  //   if (!action) return;

  //   action?.();

  //   if (evt) {
  //     const classNamesArr = evt?.target.className.split(' ');

  //     const isClickFromPill = classNamesArr?.includes('pill');

  //     if (isClickFromPill) evt.stopPropagation();
  //   }
  // }

  return (
    <div className="card">
      <Content {...props} />
    </div>
  );
}

Card.defaultProps = {
  highlight: false,
  tickets: '',
  free: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
};

export default Card;
