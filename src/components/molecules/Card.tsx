import { IEventProps } from '@/Content/types';
import Content from '../../Content/Content.Card';

import styles from './Card.module.scss';

// export type CardProps = IEventProps & {
//   onClick?: () => void;
// };

function Card(props: IEventProps) {
  return (
    <div className={styles['card']}>
      {/* <div className={styles['wrapper']}> */}
      <Content {...props} />
      {/* </div> */}
    </div>
  );
}

export default Card;
