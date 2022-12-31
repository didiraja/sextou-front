// @ts-nocheck
import Pill from "../atoms/Pill";
import Button from "../atoms/Button";
import Requests from "../../services/Requests";
import "./Card.pcss";
import { useEffect, useState, useMemo } from "react";

function goto(url: string) {
  return "";
}

export type EventData = any;

export type CardProps = {
  [key: string]: any;
  featured_media: number;
  acf: {
    event_date: string;
    tickets: string;
  };
  title: {
    rendered: string;
  };
  categories: [];
  // onClick?: () => void;
};

const Card = ({ featured_media, acf, title, categories }: CardProps) => {
  const [media, setMedia] = useState();
  const [cardCategory, setCacat] = useState([]);

  useMemo(() => {
    const grabCategories = async () => {
      const promiseOfIds = categories.map(
        async (id) => await Requests.getCatName(id)
      );

      const CatsAsArr = await Promise.all(
        promiseOfIds.map(async (promise) => {
          const result = await promise;

          // console.log(result.data.name);

          return result.data.name;
        })
      );

      setCacat(CatsAsArr);
    };

    grabCategories();
  }, []);

  useMemo(() => {
    const getImage = async () => {
      try {
        const result = await Requests.getMedia(featured_media);

        // console.log(result.data);

        setMedia(result.data.media_details.sizes.medium_large.source_url);
      } catch (e) {
        console.log(e.code);
      }
    };

    getImage();
  });

  return (
    <div className="card">
      <span className="hover:cursor-pointer" onClick={() => {}}>
        <img className="card-cover" src={media} alt="" />
        {acf && acf.event_date ? (
          <div className="card-date">{acf.event_date}</div>
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
