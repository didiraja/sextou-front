import CardGrid from "../templates/Card.Grid";
import Card, { EventData } from "../molecules/Card";
import ErrorCard from "../molecules/Card.Error";
import Title from "../atoms/Title";
// import Button from "../atoms/Button";
import { faker } from "@faker-js/faker";
import { useContext, useEffect, useState } from "react";
import Requests from "../../services/Requests";
import { ModalContext } from "../../store";

function HomeCards() {
  const [highlights, setHighlight] = useState([]);
  const [events, setEvent] = useState([]);
  // const [showMore, setShowMore] = useState(false);

  // todo: context to hooks
  const context = useContext(ModalContext);

  function handleModal(content: {}): void {
    context.setContent(() => content);
    context.setModal((modal: boolean) => !modal);
  }

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await Requests.getPosts();
        // console.log(result.data);
        setHighlight(() => result.data);
        // setEvent(() => result.data);
      } catch (e: any) {
        console.log(e.code);
      }
    };

    getPosts();
  }, []);

  return (
    <>
      <div className="highlight-events">
        <Title highlight>hype da noite</Title>

        <CardGrid>
          {!highlights.length ? (
            <ErrorCard>Nenhum evento encontrado</ErrorCard>
          ) : null}

          {highlights.length
            ? highlights.map((event: EventData) => {
                return (
                  <Card
                    highlight
                    key={faker.datatype.uuid()}
                    {...event}
                    onClick={(event: {}) => handleModal(event)}
                  />
                );
              })
            : null}
        </CardGrid>
      </div>

      {/* <div className="main-events">
        <Title>principais eventos</Title>

        <CardGrid>
          {!events.length ? (
            <ErrorCard>Nenhum evento encontrado</ErrorCard>
          ) : null}

          {events.length
            ? events.map((event: EventData) => {
                return (
                  <Card
                    key={faker.datatype.uuid()}
                    event={event}
                    highlight
                    cover={event.cover.url}
                    zone={event.zone.title}
                    neighborhood={event.neighborhood.title}
                    onClick={() => {}}
                  />
                );
              })
            : null}
        </CardGrid>

        {showMore ?
          <Button on:click={() => {}}>
            <Icon class="mr-1 text-2xl" icon="ic:baseline-library-add" /> Mais eventos
          </Button> : null}
      </div> */}
    </>
  );
}

export default HomeCards;
