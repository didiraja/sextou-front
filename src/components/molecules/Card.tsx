import Button from "../atoms/Button";
import Date from "../../services/Date";
import { TEXT } from "../../services/enums";
import { WPTermObject } from "../../types";
import "./Card.pcss";

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
  evt?: React.MouseEvent<HTMLDivElement, MouseEvent>;
  action: any;
};

const Card = (props: CardProps) => {
  const { highlight, cover, event_date, tickets, title, categories, free } =
    props;

  function goTo(url: string) {
    return () => (location.href = url);
  }

  function handleClickReducer({ evt, action }: reducerProps) {
    // console.log(evt, action);

    if (!action) return;

    action?.();

    const classNamesArr: string[] = evt?.target.className.split(" ");

    const isClickFromPill = classNamesArr?.includes("pill");

    if (isClickFromPill) return evt?.stopPropagation();
  }

  return (
    <div className="card">
      <span
        data-testid="span"
        className="clickable"
        onClick={() => handleClickReducer({ action: props.onClick?.(props) })}
      >
        <img className="card-cover" src={cover} alt="" />
        {event_date ? (
          <div data-testid="date" className="card-date">
            {Date.readableDate(event_date)}
          </div>
        ) : null}

        {title ? <div className="card-title">{title}</div> : null}

        <div data-testid="categories" className="card-meta">
          {categories?.map((item: WPTermObject, index: number) => {
            // validate item, to prevent crash if array come with falsy values
            if (item)
              return (
                <Button
                  pill
                  key={index}
                  target="_self"
                  onClick={(evt) =>
                    handleClickReducer({
                      evt,
                      action: goTo(`/category/${item.slug}`),
                    })
                  }
                >
                  {item.name}
                </Button>
              );
          }) ?? null}
        </div>
      </span>

      <div className="card-bottom">
        <Button
          href={tickets}
          onClick={(evt) =>
            handleClickReducer({ action: !tickets ? evt.preventDefault() : "" })
          }
          className={!tickets ? "no-tickets" : ""}
          highlight={highlight}
          disabled={!tickets}
          free={free}
        >
          {/* prettier-ignore */}
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
};

export default Card;
