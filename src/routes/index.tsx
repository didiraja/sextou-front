import { createBrowserRouter } from 'react-router-dom';

import Portal from './Portal';
// import Category from './Category';
import Error from './Error';

const allRoutes = ['/', '/event/:id', '/category/:slug', '/page/:page', '/category/:slug/page/:page'].map((path) => ({
  path,
  element: <Portal />,
  errorElement: <Error />,
}));

const router = createBrowserRouter([
  ...allRoutes,
  {
    path: '*',
    // change Portal to 404 component
    element: <Portal />,
    errorElement: <Error />,
  },
]);

export default router;
