import { AxiosResponse } from "axios";
import { useState, useMemo } from "react";
import Requests from "../services/Requests";

const useCategoriesList = (categories: number[]) => {
  const [categoriesList, setCategoriesList] = useState([]);

  useMemo(() => {
    const grabCategories = async () => {
      const promiseOfIds = categories.map(
        async (id: number) => await Requests.getCatName(id)
      );

      const ArrayCategories = await Promise.all(
        promiseOfIds.map(async (promise: Promise<AxiosResponse>) => {
          const result = await promise;

          // console.log(result.data.name);

          return result.data.name;
        })
      );

      setCategoriesList(() => ArrayCategories);
    };

    grabCategories();
  }, []);

  return { categoriesList };
};

export default useCategoriesList;
