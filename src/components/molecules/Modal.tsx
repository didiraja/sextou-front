// TODO: DELETE COMPONENT
/* eslint-disable react/no-danger */
import zuStore from '../../store';
import Content from '../atoms/Content';
import { CardProps } from './Card';
import Close from '../../assets/icon/close.svg';
import './Modal.pcss';

// TODO: Modal content from Actions(reducer): Event Details || Some Text || anything

function Modal() {
  const toggleModal = zuStore((store: any) => store.toggleModal);
  const content = zuStore((store: any) => store.content);

  // type guard
  function isCardProps(abc: any): abc is CardProps {
    return abc !== undefined && typeof abc === 'object';
  }

  // typeguard validation
  if (!isCardProps(content)) return null;

  function handleClick(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const isBackdrop: boolean = evt.target === evt.currentTarget;

    if (isBackdrop) {
      return toggleModal();
    }

    return null;
  }

  const findImgRegex = /<img[^>]*>/i;

  const descriptionHasImgTag = findImgRegex.test(content.description);

  return (
    <div className="backdrop z-20" onClick={handleClick}>
      <div className="modal-wrapper">
        <div className="modal">

          <p className="nav-wrapper" onClick={toggleModal}>
            <img src={Close} alt="Fechar Modal" />
          </p>

          <Content {...content} component="Modal" />

          <div className="modal-content">

            {!descriptionHasImgTag ? (
              <img
                className="modal-cover"
                src={content.cover}
                alt={content.title}
              />
            ) : null}

            <p style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: content.description }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
