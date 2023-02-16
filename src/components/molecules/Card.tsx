import Button from '../atoms/Button';
import Date from '../../services/Date';
import { TEXT } from '../../services/enums';
import { WPTermObject } from '../../types';
import './Card.pcss';

export type CardProps = {
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
  onClick?: (props: CardProps) => void;
};

export type reducerProps = {
  evt?: React.MouseEvent<HTMLDivElement, MouseEvent> & {
    target: { className: string };
  };
  action: any;
};

function Card(props: CardProps) {
  const {
    highlight, cover, event_date: eventDate, tickets, title, categories, free, onClick,
  } = props;

  function goTo(url: string) {
    return () => {
      window.location.href = url;
    };
  }

  function handleClickReducer({ evt, action }: reducerProps) {
    // console.log(evt, action);

    if (!action) return;

    action?.();

    if (evt) {
      const classNamesArr = evt?.target.className.split(' ');

      const isClickFromPill = classNamesArr?.includes('pill');

      if (isClickFromPill) evt.stopPropagation();
    }
  }

  return (
    <div className="card">
      <span
        data-testid="span"
        className="clickable"
        onClick={() => handleClickReducer({ action: onClick?.(props) })}
      >
        <img className="card-cover" src={cover} alt="" />
        {eventDate ? (
          <div data-testid="date" className="card-date">
            {Date.readableDate(eventDate)}
          </div>
        ) : null}

        {title ? <div className="card-title">{title}</div> : null}

        <div data-testid="categories" className="card-meta">
          {categories?.map((item: WPTermObject, index: number) => (
            <Button
              pill
              key={index}
              target="_self"
              onClick={(evt) => handleClickReducer({
                evt,
                action: goTo(`/category/${item.slug}`),
              })}
            >
              {item.name}
            </Button>
          )) ?? null}
        </div>
      </span>

      <div className="card-bottom">
        <Button
          href={tickets}
          onClick={(evt) => handleClickReducer({ action: !tickets ? evt.preventDefault() : '' })}
          className={!tickets ? 'no-tickets' : ''}
          highlight={highlight}
          disabled={!tickets}
          free={free}
        >
          {/* TODO: better button text */}
          {/* eslint-disable-next-line no-nested-ternary */}
          {free
            ? free && tickets
              ? TEXT.FREE_TICKETS
              : TEXT.FREE_NO_TICKETS
            : tickets
              ? TEXT.BUY_TICKETS
              : TEXT.NO_TICKETS}
        </Button>
      </div>
    </div>
  );
}

Card.defaultProps = {
  highlight: false,
  tickets: '',
  free: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
};

export default Card;
