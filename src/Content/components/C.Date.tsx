import { ContentProps } from '@/Content/types';
import Date from '@/services/Date';

import styles from '../Content.module.scss';

function ContentDate({ event_date: eventDate }: ContentProps) {
  return (
    <div data-testid='date' className={styles['date']}>
      {Date.readableDate(eventDate)}
    </div>
  );
}

export default ContentDate;
