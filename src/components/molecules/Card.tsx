import styles from './Card.module.scss';

import Content, { IEventProps } from '../atoms/Content';

export type CardProps = IEventProps & {
  path: string | number;
  onClick?: () => void;
};

// export type reducerProps = {
//   evt?: React.MouseEvent<HTMLDivElement, MouseEvent> & {
//     target: { className: string };
//   };
//   action: any;
// };

function Card(props: CardProps) {
  const { path, onClick } = props;

  return (
    <div className={styles['card']} onClick={onClick}>
      <Content mode='Card' {...props} path={`/event/${path}`} />
    </div>
  );
}

export default Card;
