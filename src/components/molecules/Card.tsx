import { useNavigate } from "react-router-dom";
import Pill from "../atoms/Pill";
import Button from "../atoms/Button";
import Date from "../../services/Date";
import { CategoryObject } from "../../types";
import "./Card.pcss";

export type CardProps = {
  title: string;
  cover: string;
  date_event: string;
  tickets?: any;
  categories: Array<CategoryObject>;
  content: string;
  onClick?: (props: CardProps) => void;
};

const Card = (props: CardProps) => {
  const { cover, date_event, tickets, title, categories } = props;

  const navigate = useNavigate();

  return (
    <div className="card">
      <span
        className="hover:cursor-pointer"
        onClick={() => props.onClick?.(props)}
      >
        <img className="card-cover" src={cover} alt="" />
        {date_event ? (
          <div className="card-date">{Date.readableDate(date_event)}</div>
        ) : null}
        {title ? <div className="card-title">{title}</div> : null}
      </span>

      <div className="card-meta">
        {categories?.map((item: CategoryObject, index: number) => {
          // validate item, to prevent crash if array come with falsy values
          if (item)
            return (
              <Pill
                highlight
                key={index}
                onClick={() => navigate(`/category/${item.id}`)}
              >
                {item.name}
              </Pill>
            );
        }) ?? null}
      </div>

      <div className="card-bottom">
        <Button highlight>
          {/* <Icon
            className="mr-1 text-2xl"
            icon="material-symbols:airplane-ticket-rounded"
          />{" "} */}
          Comprar Ingressos
        </Button>
      </div>
    </div>
  );
};

export default Card;
