import { AxiosError } from "axios";
import { useState, useMemo } from "react";
import Requests from "../services/Requests";

const useGetPosts = (query: string = "") => {
  const [posts, setPosts] = useState([]);

  useMemo(() => {
    const getPosts = async () => {
      const result = await Requests.getPosts(query);

      setPosts(() => result.data);
    };

    getPosts();
  }, []);

  return { posts };
};

export default useGetPosts;
