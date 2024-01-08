import clsx from 'clsx';

import { ContentProps } from '@/Content/types';
import Date from '@/services/Date';

import styles from '../Content.module.scss';

function ContentDate({ event_date: eventDate }: ContentProps) {
  return (
    <time className={clsx('dt-start', styles['date'])} dateTime={eventDate}>
      {Date.readableDate(eventDate)}
    </time>
  );
}

export default ContentDate;
