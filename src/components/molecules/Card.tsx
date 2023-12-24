import { IEventProps } from '@/Content/types';

import styles from './Card.module.scss';

import Content from '../../Content/Content.Card';

export type CardProps = IEventProps & {
  onClick?: () => void;
};

function Card(props: CardProps) {
  const { onClick } = props;

  return (
    <div className={styles['card']} onClick={onClick}>
      <Content {...props} />
    </div>
  );
}

export default Card;
