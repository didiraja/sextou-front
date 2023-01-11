import Date from "../../services/Date";
import Pill from "../atoms/Pill";
import Button from "../atoms/Button";
import { useContext } from "react";
import { ModalContext } from "../../store";
import { useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { CategoryToCardType } from "../../types";
import "./Modal.pcss";

// @ts-nocheck
// TODO: Modal content from Actions(reducer): Details || Text || anything
const Modal = () => {
  const { toggleModal, content } = useContext(ModalContext);
  const navigate = useNavigate();

  function handleClick(evt) {
    const targetClasses: string[] = [...evt.target.classList];
    const isBackdrop: string | undefined = targetClasses.find(
      (className: string) => className === "backdrop"
    );

    if (isBackdrop) {
      return toggleModal();
    }
  }

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
            <p className="date">{Date.readableDate(content.date_event)}</p>

            {content.categories ? (
              <div className="tags">
                {content.categories?.map((item: CategoryToCardType) => (
                  <Pill
                    key={faker.datatype.uuid()}
                    onClick={() => navigate(`/category/${item.id}`)}
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
            <p dangerouslySetInnerHTML={{ __html: content.content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
