import { useNavigate } from "react-router-dom";
import Pill from "../atoms/Pill";
import LinkButton from "../atoms/LinkButton";
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

const Card = (props: CardProps) => {
  const { highlight, cover, event_date, tickets, title, categories } = props;

  const navigate = useNavigate();

  return (
    <div className="card">
      <span
        data-testid="span"
        className="spanzada hover:cursor-pointer"
        onClick={() => props.onClick?.(props)}
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
                  // onClick={() => navigate(`/${Math.random() * 100}`)}
                  onClick={() => navigate(`/category/${item.slug}`)}
                >
                  {item.name}
                </Pill>
              );
          }) ?? null}
        </div>
      </span>

      <div className="card-bottom">
        <LinkButton
          href={tickets}
          onClick={(evt) => (!tickets ? evt.preventDefault() : "")}
          className={!tickets ? "no-tickets" : ""}
          highlight={highlight}
          disabled={!tickets}
        >
          {tickets ? TEXT.BUY_TICKETS : TEXT.NO_TICKETS_AVAILABLE}
        </LinkButton>
      </div>
    </div>
  );
};

export default Card;
