import CardGrid from "../templates/Card.Grid";
import Card, { EventData } from "../molecules/Card";
import ErrorCard from "../molecules/Card.Error";
import Title from "../atoms/Title";
// import Button from "../atoms/Button";
import { faker } from "@faker-js/faker";

import { useState } from "react";

function HomeCards() {
  const [highlights, setHighlight] = useState([
    {
      date: faker.date.recent().toISOString(),
      title: faker.company.companyName(),
      cover: { url: "http://placeimg.com/640/360/tech" },
      neighborhood: { id: 0, title: faker.address.city() },
      zone: { id: 1, title: faker.address.county() },
      mood: { id: 2, title: faker.music.genre() },
    },
    {
      date: faker.date.recent().toISOString(),
      title: faker.company.companyName(),
      cover: { url: "http://placeimg.com/640/360/tech" },
      neighborhood: { id: 0, title: faker.address.city() },
      zone: { id: 1, title: faker.address.county() },
      mood: { id: 2, title: faker.music.genre() },
    },
    {
      date: faker.date.recent().toISOString(),
      title: faker.company.companyName(),
      cover: { url: "http://placeimg.com/640/360/tech" },
      neighborhood: { id: 0, title: faker.address.city() },
      zone: { id: 1, title: faker.address.county() },
      mood: { id: 2, title: faker.music.genre() },
    },
  ]);
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

        {/* {showMore ?
          <Button on:click={() => {}}>
            <Icon class="mr-1 text-2xl" icon="ic:baseline-library-add" /> Mais eventos
          </Button> : null} */}
      </div>
    </>
  );
}

export default HomeCards;
