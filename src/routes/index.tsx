import { createBrowserRouter } from 'react-router-dom';

import Portal from './Portal';
// import Category from './Category';
import Error from './Error';

const allRoutes = ['/', '/category/:slug', '/page/:page', '/category/:slug/page/:page'].map((path) => ({
  path,
  element: <Portal />,
  errorElement: <Error />,
}));

const router = createBrowserRouter(allRoutes);

export default router;
