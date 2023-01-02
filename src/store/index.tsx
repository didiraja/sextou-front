// @ts-nocheck
import { createContext, useState } from "react";
import { CardProps } from "../components/molecules/Card";

export const context = createContext({});

export const ModalProvider = ({ children }: any) => {
  const INITIAL_DETAILS: CardProps = {
    title: {
      rendered: "Teste Evento no Modal",
    },
    content: {
      rendered:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem cum mollitia delectus perferendis laborum ipsa fugit dolore. Sequi harum inventore obcaecati, non itaque commodi placeat dolores aliquam numquam similique!",
    },
    featured_media: "https://loremflickr.com/640/480/abstract",
    acf: {
      event_date: "2023-01-21 00:00:00",
      tickets: "",
    },
    categories: ["Zona Norte", "Méier", "Hip-hop"],
  };

  const [details, setDetails] = useState(INITIAL_DETAILS);
  const [modal, setModal] = useState(false);

  const store = {
    details,
    setDetails,
    modal,
    setModal,
  };

  return <context.Provider value={store}>{children}</context.Provider>;
};
