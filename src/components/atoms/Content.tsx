/* eslint-disable react/no-danger */
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
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
  tickets?: string;
  free?: boolean;
  content: string;
  description: string;
  onClick?: (props: IEventProps) => void;
}

export type ContentProps = IEventProps & {
  mode?: MODE.CARD | 'Card';
  children?: ReactElement;
};

function DateBlock({ event_date: eventDate }: ContentProps) {
  return (
    <div data-testid="date" className="date">
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
  const { mode, children } = props;

  const isCard = mode === MODE.CARD;
  // const isSingle = mode === MODE.SINGLE;

  if (isCard) {
    return (
      <Link to={props.path}>
        {children}
      </Link>
    );
  }

  return children;
}

function ButtonContent({ tickets, highlight, free }: ContentProps) {
  return (
    <Button
      href={tickets}
      target="_blank"
      onClick={(evt) => evt.stopPropagation()}
      className={!tickets ? 'no-tickets' : ''}
      highlight={highlight}
      disabled={!tickets}
      free={free}
    >
      {BtnTxtReducer({ free, tickets })}
    </Button>
  );
}

function Header(props: ContentProps) {
  const {
    mode, cover, title, categories,
  } = props;

  return (
    <>
      <ClickableOn {...props}>
        <>
          {mode === MODE.CARD ? (
            <img className="cover-surface cover" src={cover} alt={title} />
          ) : null}

          <DateBlock {...props} />

          {title ? <div className={`title ${mode === MODE.CARD ? 'max-two-lines' : ''}`}>{title}</div> : null}
        </>
      </ClickableOn>

      <div className="subheader">
        <div data-testid="categories" className="categories-wrapper">
          {categories?.map((item: WPTermObject, index: number) => (
            <Button
              pill
              href={`/category/${item.slug}`}
              key={index}
              target="_self"
              onClick={(evt) => evt.stopPropagation()}
            >
              {item.name}
            </Button>
          )) ?? null}
        </div>

        {mode === MODE.SINGLE ? <ButtonContent {...props} /> : null}

      </div>

    </>
  );
}

function Body({
  mode, cover, title, description,
}: ContentProps) {
  return (
    <>
      {(mode === MODE.SINGLE && !textHasImgTag(description)) ? (
        <img className="cover-surface cover" src={cover} alt={title} />
      ) : null}

      {mode === MODE.SINGLE ? (
        <p
          className="description"
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
  const {
    mode,
  } = props;

  return (
    <div className={`content ${mode === MODE.CARD ? 'card-mode' : 'single-mode'}`}>
      <Header {...props} />

      <Body {...props} />

      <Footer {...props} />
    </div>
  );
}

Content.defaultProps = {
  mode: 'Card',
  highlight: false,
  tickets: '',
  free: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => { },
};

export default Content;
