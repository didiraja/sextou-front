import Content, { IEventProps } from '../atoms/Content';
import './Card.pcss';

export type CardProps = IEventProps & {
  path: string;
};

export type reducerProps = {
  evt?: React.MouseEvent<HTMLDivElement, MouseEvent> & {
    target: { className: string };
  };
  action: any;
};

function Card(props: CardProps) {
  const { path } = props;

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
      <Content mode="Card" {...props} path={`/event/${path}`} />
    </div>
  );
}

export default Card;
