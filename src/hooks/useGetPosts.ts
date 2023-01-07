import { AxiosError } from "axios";
import { useState, useMemo } from "react";
import Requests from "../services/Requests";

const useGetPosts = (query: string = "") => {
  const [posts, setPosts] = useState([]);

  useMemo(() => {
    const getPosts = async () => {
      try {
        const result = await Requests.getPosts(query);

        setPosts(() => result.data);
      } catch (e: AxiosError<any>) {
        console.log("[useGetPosts Error]", e.code, e.message);
      }
    };

    getPosts();
  }, []);

  return { posts };
};

export default useGetPosts;
