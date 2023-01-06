import Date from "../../services/Date";
import Pill from "../atoms/Pill";
import Button from "../atoms/Button";
import { useContext, ContextType } from "react";
import { ModalContext } from "../../store";
import "./Modal.pcss";

// @ts-nocheck
const Modal = () => {
  const context: ContextType<any> = useContext(ModalContext);
  const { setModal } = context;

  function toggleModal() {
    return setModal((modal: boolean) => !modal);
  }

  // TODO: Modal content from Actions(reducer): Details, Text, anything

  return (
    <div className="backdrop z-20" onClick={toggleModal}>
      <div className="modal-wrapper">
        <div className="modal">
          <div className="nav-wrapper">
            {/*  onClick={toggleModal} */}
            Fechar
          </div>

          <p className="modal-title">{context.content.title.rendered}</p>

          <img
            className="modal-cover"
            src={context.content.featured_media}
            alt="capa do evento"
          />

          <div className="modal-info">
            <p className="date">
              {Date.readableDate(context.content.acf.event_date)}
            </p>

            {context.content.categories
              ? context.content.categories.map((item: string) => {
                  <div className="tags" key={item}>
                    <Pill>{item}</Pill>
                  </div>;
                })
              : null}

            <div className="cta">
              <Button style="md:text-xl">
                {/* <Icon
                  className="mr-1 text-3xl"
                  icon="material-symbols:airplane-ticket-rounded"
                />{" "} */}
                Comprar Ingressos
              </Button>
            </div>
          </div>

          <div className="modal-content">
            <p>{context.content.content.rendered}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
