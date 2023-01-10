import { useState, useEffect } from "react";
import Requests from "../services/Requests";
import { CategoryToCardType } from "../types";

const useCategoriesList = (categories: number[]) => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const grabCategories = async () => {
      const promiseOfIds = categories.map((id: number) =>
        Requests.getCatName(id)
      );

      const promisesFullfilled = await Promise.all(promiseOfIds);

      const arrayCategories = promisesFullfilled.map((item) => {
        return {
          id: item.data.id,
          label: item.data.name,
        };
      });

      setCategoriesList(() => arrayCategories);
    };

    grabCategories();
  }, []);

  return { categoriesList };
};

export default useCategoriesList;
