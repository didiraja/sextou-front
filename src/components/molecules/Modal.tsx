import Date from "../../services/Date";
import Pill from "../atoms/Pill";
import Button from "../atoms/Button";
import { useContext } from "react";
import { ModalContext } from "../../store";
import useGrabMedia from "../../hooks/useGrabMedia";
import useCategoriesList from "../../hooks/useCategoriesList";
import { faker } from "@faker-js/faker";
import "./Modal.pcss";

// @ts-nocheck
// TODO: Modal content from Actions(reducer): Details || Text || anything
const Modal = () => {
  const { toggleModal, content } = useContext(ModalContext);
  const { media } = useGrabMedia(content.featured_media);
  const { categoriesList } = useCategoriesList(content.categories);

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
          <p className="nav-wrapper" onClick={toggleModal}>
            Fechar
          </p>

          <p className="modal-title">{content.title.rendered}</p>

          <img
            className="modal-cover"
            src={media}
            alt={content.title.rendered}
          />

          <div className="modal-info">
            <p className="date">{Date.readableDate(content.acf.event_date)}</p>

            {content.categories ? (
              <div className="tags" key={faker.datatype.uuid()}>
                {categoriesList.map((item: string) => (
                  <Pill>{item}</Pill>
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
            <p dangerouslySetInnerHTML={{ __html: content.content.rendered }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
