import { createContext, useState } from "react";
import { CardProps } from "../components/molecules/Card";
import { ChildrenOnly } from "../types";

export type ModalState = {
  showModal: boolean;
  content: CardProps | {};
};

type ModalActions = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setContent: React.Dispatch<React.SetStateAction<any>>;
  toggleModal: () => void;
  openModal: (content: any) => void;
};

export interface ModalContextProps extends ModalState, ModalActions {}

export const INITIAL_CONTENT: CardProps = {
  id: 52,
  title: "Teste Evento no Modal",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem cum mollitia delectus perferendis laborum ipsa fugit dolore. Sequi harum inventore obcaecati, non itaque commodi placeat dolores aliquam numquam similique!",
  cover: "https://loremflickr.com/640/480/abstract",
  event_date: "2023-01-21 00:00:00",
  tickets: "",
  categories: [
    {
      term_id: 99,
      name: "Teste",
      slug: "teste",
    },
  ],
  description: "",
};

const INITIAL_CONTEXT: ModalContextProps = {
  showModal: false,
  content: INITIAL_CONTENT,
  setModal: () => {},
  setContent: () => {},
  toggleModal: () => {},
  openModal: () => {},
};

export const ModalContext = createContext(INITIAL_CONTEXT);

export const ModalStorage = ({ children }: ChildrenOnly) => {
  const [showModal, setModal] = useState(false);
  const [content, setContent] = useState({});

  function toggleModal(): void {
    setModal((showModal) => !showModal);
  }

  function openModal(content: CardProps): void {
    setContent(() => content);
    setModal(() => true);
  }

  const store: ModalContextProps = {
    showModal,
    setModal,
    content,
    setContent,
    toggleModal,
    openModal,
  };

  return (
    <ModalContext.Provider value={store}>{children}</ModalContext.Provider>
  );
};
