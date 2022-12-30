import Pill from "../atoms/Pill";
import Button from "../atoms/Button";
import "./Card.pcss";

function goto(url: string) {
  return "";
}

export type EventData = any;
// export type EventData = {
//   date: string;
//   title: string;
//   cover: { url: string };
//   neighborhood: { id: number; title: string };
//   zone: { id: number; title: string };
//   mood: { id: number; title: string };
// };

export type CardProps = {
  event: EventData;
  highlight: boolean;
  cover: string;
  neighborhood?: string;
  zone?: string;
  mood?: string;
  onClick?: () => void;
};

const Card = ({ event, cover, neighborhood, zone, mood }: CardProps) => {
  return (
    <div className="card">
      <span className="hover:cursor-pointer" onClick={() => {}}>
        <img className="card-cover" src={cover} alt="" />
        <div className="card-date">{event.date}</div>
        <div className="card-title">{event.title}</div>
      </span>

      <div className="card-meta">
        {zone ? <Pill highlight>{zone}</Pill> : null}

        {neighborhood ? <Pill highlight>{neighborhood}</Pill> : null}

        {mood ? <Pill highlight>{mood}</Pill> : null}
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
