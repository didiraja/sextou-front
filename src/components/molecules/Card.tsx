// @ts-nocheck
import Pill from "../atoms/Pill";
import Button from "../atoms/Button";
import Requests from "../../services/Requests";
import Date from "../../services/Date";
import "./Card.pcss";
import { useState, useMemo, SetStateAction, useContext } from "react";
import { AxiosResponse } from "axios";
import { context } from "../../store";

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
  console.log(props);

  const { featured_media, acf, title, categories } = props;

  const [media, setMedia] = useState();
  const [cardCategory, setCardCategories] = useState([]);
  // const { setDetails } = useContext(context);

  // setDetails(() => event);

  useMemo(() => {
    const grabCategories: () => Promise<void> = async () => {
      const promiseOfIds: Promise<AxiosResponse<[]>>[] = categories.map(
        async (id) => await Requests.getCatName(id)
      );

      const ArrayCategories: SetStateAction<string> = await Promise.all(
        promiseOfIds.map(async (promise) => {
          const result: AxiosResponse<{}> = await promise;

          // console.log(result.data.name);

          return result.data.name;
        })
      );

      setCardCategories(() => ArrayCategories);
    };

    grabCategories();
  }, []);

  useMemo(() => {
    const getImage = async () => {
      try {
        const result = await Requests.getMedia(featured_media);

        // console.log(result.data);

        setMedia(result.data.media_details.sizes.medium_large.source_url);
      } catch (e: any) {
        console.log(e.code);
      }
    };

    getImage();
  }, []);

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
        {cardCategory
          ? cardCategory.map((label, index) => (
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
