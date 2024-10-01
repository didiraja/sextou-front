import clsx from 'clsx';

import { ContentProps } from '@/Content/types';
import DateService from '@/services/Date';

import styles from '../Content.module.scss';

function ContentDate({ date: eventDate }: ContentProps) {
  // const fromEventimToISO = (rawDate: string) => {
  //   const [_, dateTime] = rawDate.split(', ');
  //   const [datePart, timePart] = dateTime.split(' | ');
  //   const [day, month, year] = datePart.split('/');

  //   const date = new Date(`${year}-${month}-${day}T${timePart}:00`);

  //   return date.toISOString();
  // };

  return (
    <time className={clsx('dt-start', styles['date'])} dateTime={eventDate}>
      {DateService.readableDate(eventDate)}
    </time>
  );
}

export default ContentDate;
