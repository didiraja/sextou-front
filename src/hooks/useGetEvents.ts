import { useState, useEffect } from "react";
import Requests, { APIParams } from "../services/Requests";

const useGetEvents = (basename: string, query: APIParams = {}) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const result = await Requests.getEvents(basename, query);

      setResponse(() => result.data);
    };

    getEvents();
  }, []);

  return {
    events: response.posts,
    total_events: response.total_posts,
  };
};

export default useGetEvents;
