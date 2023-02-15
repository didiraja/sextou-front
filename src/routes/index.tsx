import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Category from "./Category";
import SingleEvent from "./SingleEvent";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/category/:slug",
    element: <Category />,
    errorElement: <Error />,
  },
  // {
  //   path: "/event/:slug",
  //   element: <SingleEvent />,
  //   // errorElement: <Error />,
  // },
  // {
  //   element: <Error />,
  //   // errorElement: <Error />,
  // },
]);

export default router;
