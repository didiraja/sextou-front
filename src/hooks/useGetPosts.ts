import { useState, useMemo } from "react";
import Requests, { APIParams } from "../services/Requests";

const useGetPosts = (query: APIParams = {}) => {
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
