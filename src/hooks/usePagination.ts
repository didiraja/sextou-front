import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const usePagination = () => {
  // console.log('usePagination', page);

  const [activePage, setActivePage] = useState(page);

  // useEffect(() => {
  //   console.log('activePage', activePage);
  // }, [activePage]);

  // const setActive = (page: number) => setActivePage(() => page);

  const goPrevious = () => setActivePage((actualPage) => actualPage - 1);

  const goNext = () => setActivePage((actualPage) => actualPage + 1);

  return {
    // activePage,
    // setActive,
    goPrevious,
    goNext,
  };
};

export default usePagination;
