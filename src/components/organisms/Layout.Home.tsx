import CardGrid from "../templates/Card.Grid";
import Card, { EventData } from "../molecules/Card";
import ErrorCard from "../molecules/Card.Error";
import Title from "../atoms/Title";
import Button from "../atoms/Button";

import { useState } from "react";

function HomeCards() {
  const [highlights, setHighlight] = useState([]);
  const [events, setEvent] = useState([]);
  // const [showMore, setShowMore] = useState(false);

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
      </div>

      <div className="main-events">
        <Title>principais eventos</Title>

        <CardGrid>
          {!events.length ? (
            <ErrorCard>Nenhum evento encontrado</ErrorCard>
          ) : null}

          {events.length
            ? events.map((event: EventData) => {
                return (
                  <Card
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

        {/* {showMore ?
          <Button on:click={() => {}}>
            <Icon class="mr-1 text-2xl" icon="ic:baseline-library-add" /> Mais eventos
          </Button> : null} */}
      </div>
    </>
  );
}

export default HomeCards;
