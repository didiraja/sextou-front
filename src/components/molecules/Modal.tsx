import { useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";
import Date from "../../services/Date";
import { ModalContext, ModalContextProps } from "../../store";
import Pill from "../atoms/Pill";
import Button from "../atoms/Button";
import { useContext } from "react";
import { CardProps } from "./Card";
import { WPTermObject } from "../../types";
import "./Modal.pcss";

// TODO: Modal content from Actions(reducer): Details || Text || anything

const Modal = () => {
  const { toggleModal, content } = useContext<ModalContextProps>(ModalContext);

  const navigate = useNavigate();

  function handleClick(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const isBackdrop: boolean = evt.target === evt.currentTarget;

    if (isBackdrop) {
      return toggleModal();
    }
  }

  // type guard
  function isCardProps(content: any): content is CardProps {
    return content !== undefined && typeof content === "object";
  }

  // typeguard validation
  if (!isCardProps(content)) return null;

  return (
    <div className="backdrop z-20" onClick={handleClick}>
      <div className="modal-wrapper">
        <div className="modal">
          <p className="nav-wrapper" onClick={toggleModal}>
            Fechar
          </p>

          <p className="modal-title">{content.title}</p>

          <img
            className="modal-cover"
            src={content.cover}
            alt={content.title}
          />

          <div className="modal-info">
            <p className="date">{Date.readableDate(content.event_date)}</p>

            {content.categories ? (
              <div className="tags">
                {content.categories?.map((item: WPTermObject) => (
                  <Pill
                    key={faker.datatype.uuid()}
                    onClick={() => navigate(`/category/${item.term_id}`)}
                  >
                    {item.name}
                  </Pill>
                ))}
              </div>
            ) : null}

            <div className="cta">
              <Button className="md:text-xl">
                {/* <Icon
                  className="mr-1 text-3xl"
                  icon="material-symbols:airplane-ticket-rounded"
                />{" "} */}
                Comprar Ingressos
              </Button>
            </div>
          </div>

          <div className="modal-content">
            {/* <p dangerouslySetInnerHTML={{ __html: content.description }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
