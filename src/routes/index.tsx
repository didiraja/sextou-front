import { createBrowserRouter } from "react-router-dom";

import LayoutHome from "../components/organisms/Layout.Home";
import About from "./About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
