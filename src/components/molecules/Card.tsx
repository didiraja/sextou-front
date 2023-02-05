import { useNavigate } from "react-router-dom";
import Pill, { pillClassName } from "../atoms/Pill";
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
  tickets?: any;
  content: string;
  description: string;
  onClick?: (props: CardProps) => void;
};

export type reducerProps = {
  evt?: React.MouseEvent<HTMLDivElement, MouseEvent>;
  action: () => void;
};

const Card = (props: CardProps) => {
  const { highlight, cover, event_date, tickets, title, categories } = props;

  const navigate = useNavigate();

  function handleClickReducer({ evt, action }: reducerProps) {
    const classNamesArr: string[] = evt?.target.className.split(" ");

    const isClickFromPill = classNamesArr?.includes(pillClassName);

    if (isClickFromPill) return evt?.stopPropagation();

    return () => action();
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
                <Pill
                  key={index}
                  onClick={(evt) =>
                    handleClickReducer({
                      evt,
                      action: navigate(`/category/${item.slug}`),
                    })
                  }
                >
                  {item.name}
                </Pill>
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
        >
          {tickets ? TEXT.BUY_TICKETS : TEXT.NO_TICKETS_AVAILABLE}
        </Button>
      </div>
    </div>
  );
};

export default Card;
