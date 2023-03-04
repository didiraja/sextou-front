import Button from './Button';
import Date from '../../services/Date';
import { TEXT } from '../../services/enums';
import { WPTermObject } from '../../types';
import './Content.pcss';

export interface IEventProps {
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
  component?: 'Modal' | 'Card';
}

export type reducerProps = {
  evt?: React.MouseEvent<HTMLDivElement, MouseEvent> & {
    target: { className: string };
  };
  action: any;
};

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

function DateBlock({ eventDate } : { eventDate: string}) {
  return (
    <div data-testid="date" className="date">
      {Date.readableDate(eventDate)}
    </div>
  );
}

function BtnTxtReducer({ free, tickets }: ContentProps) {
  if (free && tickets) { return TEXT.FREE_TICKETS; }

  if (free) { return TEXT.FREE_NO_TICKETS; }

  if (!free && tickets) { return TEXT.BUY_TICKETS; }

  return TEXT.NO_TICKETS;
}

function Content(props: ContentProps) {
  const {
    component, highlight, cover, event_date: eventDate, tickets, title, categories, free, onClick,
  } = props;

  return (
    <div className="content">
      <span
        data-testid="span"
        className="clickable"
        onClick={() => handleClickReducer({ action: onClick?.(props) })}
      >
        {
          (component === 'Card')
            ? <img className="cover" src={cover} alt={title} />
            : null
        }

        {
          (component === 'Card' && eventDate) ? (
            <DateBlock eventDate={eventDate} />
          ) : null
        }

        {title ? <div className="title">{title}</div> : null}

        <div className={`meta ${component === 'Card' ? 'card-theme' : 'modal-theme'}`}>
          {
            (component === 'Modal' && eventDate) ? (
              <DateBlock eventDate={eventDate} />
            ) : null
          }

          <div data-testid="categories" className="categories-wrapper">
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

          <Button
            href={tickets}
            onClick={(evt) => handleClickReducer({ action: !tickets ? evt.preventDefault() : '' })}
            className={!tickets ? 'no-tickets' : ''}
            highlight={highlight}
            disabled={!tickets}
            free={free}
          >
            {BtnTxtReducer(props)}
          </Button>
        </div>
      </span>
    </div>
  );
}

Content.defaultProps = {
  component: '',
  highlight: false,
  tickets: '',
  free: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
};

export default Content;
