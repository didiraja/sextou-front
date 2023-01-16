import { useState } from "react";

const usePagination = () => {
  const [totalEvents, setTotalEvents] = useState(1);
  const [activePage, setActivePage] = useState(1);

  const setActive = (page: number) => {
    return setActivePage(() => page);
  };

  const goPrevious = () => {
    return setActivePage((actualPage) => actualPage - 1);
  };

  const goNext = () => {
    return setActivePage((actualPage) => actualPage + 1);
  };

  return {
    totalEvents,
    setTotalEvents,
    activePage,
    setActive,
    goPrevious,
    goNext,
  };
};

export default usePagination;
