import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Category from "./Category";
import SingleEvent from "./SingleEvent";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/category/:slug",
    element: <Category />,
    // TODO: Custom error page for Category
    // errorElement: <NotFound />,
  },
  // {
  //   path: "/event/:slug",
  //   element: <SingleEvent />,
  //   // TODO: Custom error page for Category
  //   // errorElement: <NotFound />,
  // },
]);

export default router;
