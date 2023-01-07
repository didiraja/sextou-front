import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faker } from "@faker-js/faker";

import CardGrid from "../components/templates/Card.Grid";
import ErrorCard from "../components/molecules/Card.Error";
import Card, { EventData } from "../components/molecules/Card";
import useGetPosts from "../hooks/useGetPosts";

const Category = () => {
  const [events, setEvents] = useState([]);

  const { "*": id } = useParams();

  if (typeof Number(id) !== "number")
    return (
      <>
        <h1>Página de Categorias</h1>

        <p>Incluiremos conteúdo aqui, mais tarde</p>
      </>
    );

  if (id) {
    const { posts } = useGetPosts(`categories=${id}`);

    useEffect(() => {
      setEvents(() => posts);
    }, [posts]);
  }

  return (
    <CardGrid>
      {!events.length ? <ErrorCard>Nenhum evento encontrado</ErrorCard> : null}

      {events.length
        ? events.map((event: EventData) => {
            return (
              <Card
                highlight
                key={faker.datatype.uuid()}
                {...event}
                // onClick={openModal}
              />
            );
          })
        : null}
    </CardGrid>
  );
};

export default Category;
