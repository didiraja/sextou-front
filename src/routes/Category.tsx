import { useContext, useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CardGrid from "../components/templates/Card.Grid";
import ErrorCard from "../components/molecules/Card.Error";
import Card, { CardProps } from "../components/molecules/Card";
import useGetEvents from "../hooks/useGetEvents";
import { ModalContext } from "../store";
import { APIParams } from "../services/Requests";
import Pagination from "../components/atoms/Pagination";
import usePagination from "../hooks/usePagination";
import Requests from "../services/Requests";
import Modal from "../components/molecules/Modal";

const Category = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { showModal, openModal } = useContext(ModalContext);

  const isNumber: boolean = !Number.isNaN(Number(slug));
  useEffect(() => {
    if (isNumber) return navigate("/");
  }, []);

  const scollToRef = useRef();

  // LOADING AND PAGINATION
  const { activePage, setActive, goPrevious, goNext } = usePagination();

  const [events, setEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [errorMsg, setErrorMsg] = useState("Nenhum evento encontrado");

  useEffect(() => {
    const getEvents = async () => {
      try {
        const result = await Requests.getEvents(`category/${slug}`, {
          page: activePage,
        });

        setEvents(() => result.data.posts);
        setTotalEvents(() => result.data.total_posts);
      } catch (error: any) {
        // console.log(error);
        console.log(`${error.code} - ${error.message}`);

        if (error.code === "ERR_NETWORK")
          setErrorMsg(() => "Desculpa , não foi possível buscar os eventos.");
      }
    };

    getEvents();
  }, [slug, activePage]);
  // end

  return (
    <>
      {showModal ? <Modal /> : null}

      <div ref={scollToRef} />

      <CardGrid>
        {!events?.length ? <ErrorCard>{errorMsg}</ErrorCard> : null}

        {events?.length
          ? events.map((event: CardProps) => {
              return <Card key={event.id} {...event} onClick={openModal} />;
            })
          : null}
      </CardGrid>
      <Pagination
        totalItems={totalEvents}
        page={activePage}
        onSelectPage={(page: number) => {
          setActive(page);

          scollToRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onPrevious={() => {
          goPrevious();

          scollToRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onNext={() => {
          goNext();

          scollToRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      />
    </>
  );
};

export default Category;
