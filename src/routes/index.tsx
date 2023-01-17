import { createBrowserRouter } from "react-router-dom";

import LayoutHome from "../components/organisms/Layout.Home";
import About from "./About";
import Category from "./Category";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/category/:slug",
    element: <Category />,
    // TODO: Custom error page for Category
    // errorElement: <NotFound />,
  },
]);

export default router;
