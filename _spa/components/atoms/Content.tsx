/* eslint-disable react/no-danger */
import { ComponentType, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Button from './Button';
import Date from '../../services/Date';
import { TEXT, MODE } from '../../services/enums';
import { textHasImgTag } from '../../services/utils';
import { WPTermObject } from '../../types';
import './Content.pcss';

export interface IEventProps {
  slug: string;
  highlight?: boolean;
  id: number;
  title: string;
  event_date: string;
  categories: Array<WPTermObject>;
  cover: string;
  tickets: string;
  free?: boolean;
  content: string;
  description: string;
}

export type ContentProps = IEventProps & {
  mode?: 'Card' | 'Single';
  children?: ReactElement;
  path?: string;
  onClick?: () => void;
};

export interface ILoaderMount {
  loaderData: {
    posts: IEventProps[];
    total_posts: number;
  };
  children: ComponentType<any>;
}

function DateBlock({ event_date: eventDate }: ContentProps) {
  return (
    <div data-testid='date' className='date'>
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
    return <Link to={path}>{children}</Link>;
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
    <Link target='_blank' to={tickets}>
      {content}
    </Link>
  );
}

function Header(props: ContentProps) {
  const { mode, cover, title, categories } = props;

  return (
    <>
      <ClickableOn {...props}>
        <>
          {mode === MODE.CARD ? (
            <img className='cover-surface cover' src={cover} alt={title} />
          ) : null}

          <DateBlock {...props} />

          {title ? (
            <div
              className={classNames({
                title: true,
                'max-two-lines': mode === MODE.CARD,
              })}
            >
              {title}
            </div>
          ) : null}
        </>
      </ClickableOn>

      <div className='subheader'>
        <div data-testid='categories' className='categories-wrapper'>
          {categories?.map((item: WPTermObject) => (
            <Link
              key={item.term_id}
              target='_self'
              to={`/category/${item.slug}`}
              reloadDocument
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

function Body({ mode, cover, title, description }: ContentProps) {
  return (
    <>
      {mode === MODE.SINGLE && !textHasImgTag(description) ? (
        <img className='cover-surface cover' src={cover} alt={title} />
      ) : null}

      {mode === MODE.SINGLE ? (
        <p
          className='description'
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
      className={classNames({
        content: true,
        'card-mode': mode === MODE.CARD,
        'single-mode': mode !== MODE.CARD,
      })}
      onClick={onClick}
    >
      <Header {...props} />

      <Body {...props} />

      <Footer {...props} />
    </div>
  );
}

export default Content;
