import CardGrid from "../templates/Card.Grid";
import Card, { CardProps } from "../molecules/Card";
import ErrorCard from "../molecules/Card.Error";
import Title from "../atoms/Title";
import { faker } from "@faker-js/faker";
import { useContext, useEffect, useState } from "react";
import Requests from "../../services/Requests";
import { ModalContext } from "../../store";
import Modal from "../molecules/Modal";
import Pagination from "../atoms/Pagination";
import { GenericObject } from "../../types";
import { AxiosResponse } from "axios";

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

  // TODO: Convert pagination logic to Hook
  // PAGINATION STATE
  const [totalEvents, setTotalEvents] = useState(1);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result: AxiosResponse<SextouAPI> = await Requests.getPosts(
          `page=${activePage}`
        );

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

        <Pagination
          totalItems={totalEvents}
          page={activePage}
          onSelectPage={(page: number) => setActivePage(() => page)}
          onPrevious={() => setActivePage((actualPage) => actualPage - 1)}
          onNext={() => setActivePage((actualPage) => actualPage + 1)}
        />
      </div>
    </>
  );
}

export default HomeCards;
