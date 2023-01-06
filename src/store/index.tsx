// @ts-nocheck
import { createContext, useState } from "react";
import { CardProps } from "../components/molecules/Card";

export const INITIAL_CONTENT: CardProps = {
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

export const ModalContext = createContext();

export const ModalStorage = ({ children }: any) => {
  const [showModal, setModal] = useState(false);
  const [content, setContent] = useState(INITIAL_CONTENT);

  const store = {
    showModal,
    setModal,
    content,
    setContent,
  };

  return (
    <ModalContext.Provider value={store}>{children}</ModalContext.Provider>
  );
};
