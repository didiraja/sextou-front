import CardGrid from "../templates/Card.Grid";
import Card, { CardProps } from "../molecules/Card";
import ErrorCard from "../molecules/Card.Error";
import Title from "../atoms/Title";
import { faker } from "@faker-js/faker";
import { useContext, useEffect, useState } from "react";
import Requests, { APIParams } from "../../services/Requests";
import { ModalContext } from "../../store";
import Modal from "../molecules/Modal";
import Pagination from "../atoms/Pagination";
import { GenericObject } from "../../types";
import { AxiosResponse } from "axios";
import usePagination from "../../hooks/usePagination";

type SextouAPI = GenericObject & {
  data: {
    total_posts: number;
    posts: CardProps[];
  };
};

function HomeCards() {
  const { showModal, openModal } = useContext(ModalContext);

  // DATA STATE
  const [highlights, setHighlight] = useState([]);
  const [events, setEvent] = useState([]);

  const {
    totalEvents,
    setTotalEvents,
    activePage,
    setActive,
    goPrevious,
    goNext,
  } = usePagination();

  useEffect(() => {
    const getPosts = async () => {
      const query: APIParams = {
        page: activePage,
      };

      try {
        const result: AxiosResponse<SextouAPI> = await Requests.getPosts(query);

        // console.log(result.data);
        // setHighlight(() => result.data);
        setTotalEvents(() => result.data.total_posts);
        setEvent(() => result.data.posts);
      } catch (e) {
        console.log(e);
      }
    };

    getPosts();
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

        {!events ? (
          <Pagination
            totalItems={totalEvents}
            page={activePage}
            onSelectPage={(page: number) => setActive(page)}
            onPrevious={goPrevious}
            onNext={goNext}
          />
        ) : null}
      </div>
    </>
  );
}

export default HomeCards;
