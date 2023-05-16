import { useEffect, useState, useRef } from "react";
import zuStore from "../store";
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
import { ERROR } from "../services/enums";

function Home() {
  const openModal = zuStore((store: any) => store.openModal);

  const scollToRef = useRef<HTMLDivElement | null>(null);

  // DATA STATE
  const [queryString, setQueryString] = useState({
    after: Date.todayDate(),
    per_page: 12,
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

        if (!result) {
          return;
        }

        setEvents(() => result.data.posts);
        setTotalEvents(() => result.data.total_posts);
      } catch (error: any) {
        // console.log(error);
        // eslint-disable-next-line no-console
        console.log(`${error.code} - ${error.message}`);

        if (error.code === "ERR_NETWORK") setErrorMsg(() => ERROR.LOADING);
      }
    };

    getEvents();
  }, [queryString]);
  // end

  useEffect(() => {
    setQueryString((state) => ({
      ...state,
      page: activePage,
    }));
  }, [activePage]);

  const scrollPageUp = () => {
    if (!scollToRef.current) return;

    scollToRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="main-events my-24" ref={scollToRef}>
        <Title>principais shows e festas no rio de janeiro</Title>

        <CardGrid>
          {errorMsg ? (
            <ErrorCard>
              <p className="text-2xl">{errorMsg}</p>
            </ErrorCard>
          ) : null}

          {events?.length
            ? events.map((event: CardProps) => (
                <Card
                  key={event.id}
                  {...event}
                  onClick={(evt) => openModal(evt)}
                />
              ))
            : !errorMsg && (
                <>
                  <LoadingCard />
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
            setActive(page);

            scrollPageUp();
          }}
          onPrevious={() => {
            goPrevious();

            scrollPageUp();
          }}
          onNext={() => {
            goNext();

            scrollPageUp();
          }}
        />
      </div>

      <About />
    </>
  );
}

export default Home;
