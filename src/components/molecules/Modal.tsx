import Date from "../../services/Date";
import Pill from "../atoms/Pill";
import Button from "../atoms/Button";
import { useContext, ContextType } from "react";
import { ModalContext } from "../../store";
import "./Modal.pcss";

// @ts-nocheck
// TODO: Modal content from Actions(reducer): Details || Text || anything
const Modal = () => {
  const { toggleModal, content } = useContext(ModalContext);

  function handleClick(evt) {
    const targetClasses: string[] = [...evt.target.classList];
    const isBackdrop: string | undefined = targetClasses.find(
      (className: string) => className === "backdrop"
    );

    if (isBackdrop) {
      return toggleModal();
    }
  }

  // TODO: implement useGrabMedia and useCategoriesList

  return (
    <div className="backdrop z-20" onClick={handleClick}>
      <div className="modal-wrapper">
        <div className="modal">
          <div className="nav-wrapper" onClick={toggleModal}>
            Fechar
          </div>

          <p className="modal-title">{content.title.rendered}</p>

          <img
            className="modal-cover"
            src={content.featured_media}
            alt="capa do evento"
          />

          <div className="modal-info">
            <p className="date">{Date.readableDate(content.acf.event_date)}</p>

            {content.categories
              ? content.categories.map((item: string) => {
                  <div className="tags" key={item}>
                    <Pill>{item}</Pill>
                  </div>;
                })
              : null}

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
            <p>{content.content.rendered}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
