import { IEventProps } from '@/Content/types';
import Content from '../../Content/Content.Card';

import styles from './Card.module.scss';

function Card(props: IEventProps) {
  return (
    <div className={styles['card']}>
      <Content {...props} />
    </div>
  );
}

export default Card;
