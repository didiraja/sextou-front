import { createBrowserRouter } from "react-router-dom";

import LayoutHome from "../components/organisms/Layout.Home";
import About from "./About";
import Category from "./Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/category/*",
    // TODO: validate * to be number only
    element: <Category />,
    // errorElement: </>,
  },
]);

export default router;
