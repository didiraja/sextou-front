import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";

import CardGrid from "../components/templates/Card.Grid";
import ErrorCard from "../components/molecules/Card.Error";
import Card from "../components/molecules/Card";
import useGetEvents from "../hooks/useGetEvents";
import { ModalContext } from "../store";
import { APIParams } from "../services/Requests";
import Pagination from "../components/atoms/Pagination";
import usePagination from "../hooks/usePagination";
import Requests from "../services/Requests";

const Category = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { openModal } = useContext(ModalContext);

  const isNumber: boolean = !Number.isNaN(Number(slug));
  useEffect(() => {
    if (isNumber) return navigate("/");
  }, []);

  // LOADING AND PAGINATION
  const { activePage, setActive, goPrevious, goNext } = usePagination();

  const [events, setEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);

  useEffect(() => {
    const getEvents = async () => {
      const result = await Requests.getEvents(`category/${slug}`, {
        page: activePage,
      });

      setEvents(() => result.data.posts);
      setTotalEvents(() => result.data.total_posts);
    };

    getEvents();
  }, [activePage]);
  // end

  return (
    <>
      <CardGrid>
        {!events?.length ? (
          <ErrorCard>Nenhum evento encontrado</ErrorCard>
        ) : null}

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
      <Pagination
        totalItems={totalEvents}
        page={activePage}
        onSelectPage={(page: number) => setActive(page)}
        onPrevious={goPrevious}
        onNext={goNext}
      />
    </>
  );
};

export default Category;
