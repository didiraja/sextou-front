// @ts-nocheck
const Modal = () => {
  return (
    <div class="backdrop z-20" onClick={() => {}}>
      <div class="modal-wrapper">
        <div class="modal">
          <div class="nav-wrapper" onClick={() => {}}>
            <Icon class="text-5xl" icon="material-symbols:close" />
          </div>

          <p class="modal-title">{$eventDetails.Title}</p>

          <img
            class="modal-cover"
            src={$eventDetails.Cover.url}
            alt="capa do evento"
          />

          <div class="modal-info">
            <p class="date">{readableDate($eventDetails.Date)}</p>

            <div class="tags">
              <Pill>{$eventDetails.Zone.Title}</Pill>
              <Pill>{$eventDetails.Neighborhood.Name}</Pill>
            </div>

            <div class="cta">
              <Button style="md:text-xl">
                <Icon
                  class="mr-1 text-3xl"
                  icon="material-symbols:airplane-ticket-rounded"
                />{" "}
                Comprar Ingressos
              </Button>
            </div>
          </div>

          <div class="modal-content">
            <p>{$eventDetails.Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
