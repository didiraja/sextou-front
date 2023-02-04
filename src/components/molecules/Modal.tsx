import { useNavigate } from "react-router-dom";
import Date from "../../services/Date";
import { ModalContext, ModalContextProps } from "../../store";
import Pill from "../atoms/Pill";
import LinkButton from "../atoms/LinkButton";
import { useContext } from "react";
import { CardProps } from "./Card";
import { TEXT } from "../../services/enums";
import { WPTermObject } from "../../types";
import "./Modal.pcss";

// TODO: Modal content from Actions(reducer): Details || Text || anything

const Modal = () => {
  const { toggleModal, content } = useContext<ModalContextProps>(ModalContext);

  // type guard
  function isCardProps(content: any): content is CardProps {
    return content !== undefined && typeof content === "object";
  }

  // typeguard validation
  if (!isCardProps(content)) return null;

  const navigate = useNavigate();

  function handleClick(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const isBackdrop: boolean = evt.target === evt.currentTarget;

    if (isBackdrop) {
      return toggleModal();
    }
  }

  const findImgRegex = /<img[^>]*>/i;

  const descriptionHasImgTag = findImgRegex.test(content.description);

  return (
    <div className="backdrop z-20" onClick={handleClick}>
      <div className="modal-wrapper">
        <div className="modal">
          {/* CLOSE BUTTON */}
          <p className="nav-wrapper" onClick={toggleModal}>
            Fechar
          </p>
          {/* TITLE */}
          <p className="modal-title">{content.title}</p>
          {/* INFORMATION */}
          <div className="modal-info">
            {/* DATE */}
            <p className="date">{Date.readableDate(content.event_date)}</p>

            {/* CATEGORIES */}
            {content.categories ? (
              <div className="tags">
                {content.categories?.map((item: WPTermObject) => (
                  <Pill
                    key={item.term_id}
                    onClick={() => {
                      toggleModal();
                      navigate(`/category/${item.slug}`);
                    }}
                  >
                    {item.name}
                  </Pill>
                ))}
              </div>
            ) : null}

            {/* TICKETS */}
            <div className="cta">
              <LinkButton
                href={content.tickets}
                onClick={(evt) =>
                  !content.tickets ? evt.preventDefault() : ""
                }
                className={!content.tickets ? "no-tickets" : ""}
                highlight={content.highlight}
                disabled={!content.tickets}
              >
                {content.tickets ? TEXT.BUY_TICKETS : TEXT.NO_TICKETS_AVAILABLE}
              </LinkButton>
            </div>
          </div>
          <div className="modal-content">
            {/* COVER */}

            {!descriptionHasImgTag ? (
              <img
                className="modal-cover"
                src={content.cover}
                alt={content.title}
              />
            ) : null}

            {/* DESCRIPTION */}
            <p dangerouslySetInnerHTML={{ __html: content.description }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
