/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-danger */
import clsx from 'clsx';
// import Image from 'next/image';
import Link from 'next/link';
import { ComponentType } from 'react';

import styles from './Content.module.scss';

import Button from '../../components/atoms/Button';
import Date from '../../services/Date';
import { MODE, TEXT } from '../../services/enums';
import { textHasImgTag } from '../../services/utils';
import { WPTermObject } from '../../types';

export interface ILoaderMount {
  loaderData: {
    posts: IEventProps[];
    total_posts: number;
  };
  children: ComponentType<any>;
}

function DateBlock({ event_date: eventDate }: ContentProps) {
  return (
    <div data-testid='date' className={styles['date']}>
      {Date.readableDate(eventDate)}
    </div>
  );
}

export function BtnTxtReducer({ free, tickets }: Partial<ContentProps>) {
  if (free && tickets) {
    return TEXT.FREE_TICKETS;
  }

  if (free) {
    return TEXT.FREE_NO_TICKETS;
  }

  if (!free && tickets) {
    return TEXT.BUY_TICKETS;
  }

  return TEXT.NO_TICKETS;
}

function ClickableOn(props: ContentProps) {
  const { mode, children, path } = props;

  const isCard = mode === MODE.CARD;
  // const isSingle = mode === MODE.SINGLE;

  if (isCard && path) {
    return <Link href={path}>{children}</Link>;
  }

  return children || null;
}

function ButtonContent(props: ContentProps) {
  const { tickets, free } = props;

  const content = (
    <Button disabled={!tickets} {...props}>
      {BtnTxtReducer({ free, tickets })}
    </Button>
  );

  if (!tickets) {
    return content;
  }

  return (
    <Link target='_blank' href={tickets}>
      {content}
    </Link>
  );
}

function Header(props: ContentProps) {
  const { mode, cover, title, categories /* , coverWidth, coverHeight */ } =
    props;

  return (
    <>
      <ClickableOn {...props}>
        <>
          {mode === MODE.CARD ? (
            /**
             * Next Image component
              <Image
                className={clsx(styles.cover_surface, styles.cover)}
                width={coverWidth}
                height={coverHeight}
                src={cover}
                alt={title}
              />
            */
            <img
              className={clsx(styles['cover-surface'], styles['cover'])}
              src={cover}
              alt={title}
            />
          ) : null}

          <DateBlock {...props} />

          {title ? (
            <div
              className={clsx(styles['title'], {
                'max-two-lines': mode === MODE.CARD,
              })}
            >
              {title}
            </div>
          ) : null}
        </>
      </ClickableOn>

      <div className={styles['subheader']}>
        <div data-testid='categories' className={styles['categories-wrapper']}>
          {categories?.map((item: WPTermObject) => (
            <Link
              key={item.term_id}
              target='_self'
              href={`/category/${item.slug}`}
            >
              <Button pill>{item.name}</Button>
            </Link>
          )) ?? null}
        </div>

        {mode === MODE.SINGLE ? <ButtonContent {...props} /> : null}
      </div>
    </>
  );
}

function Body({
  mode,
  cover,
  title,
  description,
  coverWidth,
  coverHeight,
}: ContentProps) {
  return (
    <>
      {mode === MODE.SINGLE && !textHasImgTag(description) ? (
        /**
         * Next Image component
        <Image
          className={clsx(styles.cover_surface, styles.cover)}
          width={coverWidth}
          height={coverHeight}
          src={cover}
          alt={title}
        /> */
        <img
          className={clsx(styles['cover-surface'], styles['cover'])}
          src={cover}
          alt={title}
        />
      ) : null}

      {mode === MODE.SINGLE ? (
        <p
          className={styles['description']}
          style={{ whiteSpace: 'pre-wrap' }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      ) : null}
    </>
  );
}

function Footer(props: ContentProps) {
  const { mode } = props;

  if (mode === MODE.CARD) {
    return <ButtonContent {...props} />;
  }

  return null;
}

function Content(props: ContentProps) {
  const { mode, onClick } = props;

  return (
    <div
      className={clsx(
        styles['content'],
        mode === MODE.CARD ? styles['card-mode'] : styles['single-mode']
      )}
      onClick={onClick}
    >
      <Header {...props} />

      <Body {...props} />

      <Footer {...props} />
    </div>
  );
}

export default Content;