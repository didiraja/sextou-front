// @ts-nocheck
import Pill from "../atoms/Pill";
import Button from "../atoms/Button";
import Date from "../../services/Date";
import "./Card.pcss";
import useGrabMedia from "../../hooks/useGrabMedia";
import useCategoriesList from "../../hooks/useCategoriesList";

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
  // onClick?: () => void;
};

const Card = (props: CardProps) => {
  const { featured_media, acf, title, categories } = props;

  const { media } = useGrabMedia(featured_media);
  const { categoriesList } = useCategoriesList(categories);

  return (
    <div
      className="card hover:cursor-pointer"
      onClick={() => props.onClick(props)}
    >
      <span className="hover:cursor-pointer" onClick={() => {}}>
        <img className="card-cover" src={media} alt="" />
        {acf && acf.event_date ? (
          <div className="card-date">{Date.readableDate(acf.event_date)}</div>
        ) : null}
        {title ? <div className="card-title">{title.rendered}</div> : null}
      </span>

      <div className="card-meta">
        {categoriesList
          ? categoriesList.map((label, index) => (
              <Pill highlight key={index}>
                {label}
              </Pill>
            ))
          : null}
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
