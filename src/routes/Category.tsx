import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";

import CardGrid from "../components/templates/Card.Grid";
import ErrorCard from "../components/molecules/Card.Error";
import Card from "../components/molecules/Card";
import useGetEvents from "../hooks/useGetEvents";
import { ModalContext } from "../store";
import { APIParams } from "../services/Requests";

const Category = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { openModal } = useContext(ModalContext);

  const isNumber: boolean = !Number.isNaN(Number(slug));

  const { events, total_events } = useGetEvents(`category/${slug}`);

  // useEffect(() => {
  //   if (isNumber) return navigate("/");
  // }, [events]);

  return (
    <CardGrid>
      {!events?.length ? <ErrorCard>Nenhum evento encontrado</ErrorCard> : null}

      {events?.length
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
