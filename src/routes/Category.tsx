import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";

import CardGrid from "../components/templates/Card.Grid";
import ErrorCard from "../components/molecules/Card.Error";
import Card from "../components/molecules/Card";
import useGetPosts from "../hooks/useGetPosts";
import { ModalContext } from "../store";

const Category = () => {
  const [events, setEvents] = useState([]);
  const { "*": id } = useParams();
  const navigate = useNavigate();
  const { openModal } = useContext(ModalContext);

  const isNumber: boolean = !Number.isNaN(Number(id));

  const query: APIParams = {
    categories: id,
  };

  const { posts } = useGetPosts(query);

  useEffect(() => {
    if (!isNumber) return navigate("/");

    setEvents(() => posts);
  }, [posts]);

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
                onClick={openModal}
              />
            );
          })
        : null}
    </CardGrid>
  );
};

export default Category;
