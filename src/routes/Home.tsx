import { useEffect, useState, useRef } from "react";
import { zuStore } from "../store/";
import Requests from "../services/Requests";
import Date from "../services/Date";
import CardGrid from "../components/templates/Card.Grid";
import Card, { CardProps } from "../components/molecules/Card";
import LoadingCard from "../components/molecules/Card.Loading";
import ErrorCard from "../components/molecules/Card.Error";
import Title from "../components/atoms/Title";
import Pagination from "../components/atoms/Pagination";
import usePagination from "../hooks/usePagination";
import About from "../components/molecules/About";

function Home() {
  const openModal = zuStore((store: any) => store.openModal);

  const scollToRef = useRef();

  // DATA STATE
  const [queryString, setQueryString] = useState({
    after: Date.todayDate(),
    per_page: 8,
  });

  // LOADING AND PAGINATION
  const { activePage, setActive, goPrevious, goNext } = usePagination();

  // const [highlights, setHighlight] = useState([]);
  const [events, setEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const getEvents = async () => {
      try {
        const result = await Requests.getEvents("events", queryString);

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
  }, [queryString]);
  // end

  useEffect(() => {
    setQueryString((state) => {
      return {
        ...state,
        page: activePage,
      };
    });
  }, [activePage]);

  return (
    <>
      {/* <div className="highlight-events">
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
                    key={}
                    {...event}
                    onClick={openModal}
                  />
                );
              })
            : null}
        </CardGrid>
      </div> */}

      <div className="main-events my-24" ref={scollToRef}>
        <Title>principais shows e festas no rio de janeiro</Title>

        <CardGrid>
          {errorMsg ? <ErrorCard>{errorMsg}</ErrorCard> : null}

          {events?.length ? (
            events.map((event: CardProps) => {
              return (
                <Card
                  key={event.id}
                  {...event}
                  onClick={(event) => openModal(event)}
                />
              );
            })
          ) : (
            <>
              <LoadingCard />
              <LoadingCard />
            </>
          )}
        </CardGrid>

        <Pagination
          totalItems={totalEvents}
          page={activePage}
          // REFACTOR SCROLL AFTER CLICK
          onSelectPage={(page: number) => {
            // TODO: optimize
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
      </div>

      <About />
    </>
  );
}

export default Home;
