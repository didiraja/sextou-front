import CardGrid from "../templates/Card.Grid";
import Card, { CardProps } from "../molecules/Card";
import ErrorCard from "../molecules/Card.Error";
import Title from "../atoms/Title";
// import Button from "../atoms/Button";
import { faker } from "@faker-js/faker";
import { useContext, useEffect, useState } from "react";
import Requests from "../../services/Requests";
import { ModalContext } from "../../store";
import Modal from "../molecules/Modal";

function HomeCards() {
  const [highlights, setHighlight] = useState([]);
  const [events, setEvent] = useState([]);
  // const [showMore, setShowMore] = useState(false);

  const { showModal, openModal } = useContext(ModalContext);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await Requests.getPosts();

        // console.log(result.data);
        // setHighlight(() => result.data);
        setEvent(() => result.data);
      } catch (e) {
        console.log(e);
      }
    };

    getPosts();
  }, []);

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
    </>
  );
}

export default HomeCards;
