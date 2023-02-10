import Date from "../../services/Date";
import { zuStore } from "../../store";
import Button from "../atoms/Button";
import { CardProps } from "./Card";
import { TEXT } from "../../services/enums";
import { WPTermObject } from "../../types";
import "./Modal.pcss";

// TODO: Modal content from Actions(reducer): Details || Text || anything

const Modal = () => {
  const toggleModal = zuStore((store: any) => store.toggleModal);
  const content = zuStore((store: any) => store.content);

  // type guard
  function isCardProps(content: any): content is CardProps {
    return content !== undefined && typeof content === "object";
  }

  // typeguard validation
  if (!isCardProps(content)) return null;

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
                  <Button
                    pill
                    key={item.term_id}
                    href={`/category/${item.slug}`}
                    target="_self"
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            ) : null}

            {/* TICKETS */}
            <div className="cta">
              <Button
                href={content.tickets}
                onClick={(evt) =>
                  !content.tickets ? evt.preventDefault() : ""
                }
                className={!content.tickets ? "no-tickets" : ""}
                highlight={content.highlight}
                disabled={!content.tickets}
                free={content.free}
              >
                {content.free
                  ? content.free && content.tickets
                    ? TEXT.FREE_TICKETS
                    : TEXT.FREE_NO_TICKETS
                  : content.tickets
                  ? TEXT.BUY_TICKETS
                  : TEXT.NO_TICKETS}
              </Button>
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
