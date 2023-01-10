// @ts-nocheck
import Pill from "../atoms/Pill";
import Button from "../atoms/Button";
import Date from "../../services/Date";
import useGrabMedia from "../../hooks/useGrabMedia";
import useCategoriesList from "../../hooks/useCategoriesList";
import { useNavigate } from "react-router-dom";
import "./Card.pcss";

export type EventData = any;

export type CardProps = {
  [key: string]: any;
  featured_media?: number;
  acf?: {
    event_date: string;
    tickets: string;
  };
  title?: {
    rendered: string;
  };
  categories?: number[];
  onClick: void;
};

const Card = (props: CardProps) => {
  const { featured_media, acf, title, categories } = props;
  const { media } = useGrabMedia(featured_media);
  const { categoriesList } = useCategoriesList(categories);

  const navigate = useNavigate();

  return (
    <div className="card">
      <span
        className="hover:cursor-pointer"
        onClick={() => props.onClick(props)}
      >
        <img className="card-cover" src={media} alt="" />
        {acf?.event_date ? (
          <div className="card-date">{Date.readableDate(acf.event_date)}</div>
        ) : null}
        {title ? <div className="card-title">{title.rendered}</div> : null}
      </span>

      <div className="card-meta">
        {categoriesList?.map((item, index) => {
          // validate item, to prevent crash if array come with falsy values
          if (item)
            return (
              <Pill
                highlight
                key={index}
                onClick={() => navigate(`/category/${item.id}`)}
              >
                {item.label}
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
