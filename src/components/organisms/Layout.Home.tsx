import CardGrid from "../templates/Card.Grid";
import Card, { CardProps } from "../molecules/Card";
import ErrorCard from "../molecules/Card.Error";
import Title from "../atoms/Title";
import { faker } from "@faker-js/faker";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../store";
import Modal from "../molecules/Modal";
import Pagination from "../atoms/Pagination";
import usePagination from "../../hooks/usePagination";
import useGetEvents from "../../hooks/useGetEvents";
import Date from "../../services/Date";

function HomeCards() {
  const { showModal, openModal } = useContext(ModalContext);

  // DATA STATE
  const [queryString, setQueryString] = useState({
    after: Date.todayDate(),
  });
  const [highlights, setHighlight] = useState([]);

  const { activePage, setActive, goPrevious, goNext } = usePagination();

  const { total_events: totalEvents, events } = useGetEvents(
    "events",
    queryString
  );

  useEffect(() => {
    setQueryString((state) => {
      return {
        ...state,
        page: activePage,
      };
    });
  }, [activePage]);

  return (
    <>
      {showModal ? <Modal /> : null}

      <div className="highlight-events">
        <Title highlight>hype da noite</Title>

        <CardGrid>
          {!highlights?.length ? (
            <ErrorCard>Nenhum evento encontrado</ErrorCard>
          ) : null}

          {highlights?.length
            ? highlights.map((event: CardProps) => {
                return (
                  <Card
                    highlight
                    key={faker.datatype.uuid()}
                    {...event}
                    onClick={openModal}
                  />
                );
              })
            : null}
        </CardGrid>
      </div>

      <div className="main-events">
        <Title>principais eventos</Title>

        <CardGrid>
          {!events?.length ? (
            <ErrorCard>Nenhum evento encontrado</ErrorCard>
          ) : null}

          {events?.length
            ? events.map((event: CardProps) => {
                return (
                  <Card
                    key={faker.datatype.uuid()}
                    {...event}
                    onClick={openModal}
                  />
                );
              })
            : null}
        </CardGrid>

        <Pagination
          totalItems={totalEvents}
          page={activePage}
          onSelectPage={(page: number) => setActive(page)}
          onPrevious={goPrevious}
          onNext={goNext}
        />
      </div>
    </>
  );
}

export default HomeCards;
