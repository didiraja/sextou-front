// @ts-nocheck
import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider,
} from 'react-router-dom';
import Template from './RootTemplate';

import Portal from './old.Portal';
// import Category from './Category';
import Error from './Error';

const allRoutes = ['/', '/event/:id', '/category/:slug', '/page/:page', '/category/:slug/page/:page'].map((path) => ({
  path,
  element: <Portal />,
  errorElement: <Error />,
}));

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Template />}>
    {/* <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} action={contactAction} />
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
          // errorElement={<CareersError />}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route> */}

    <Route path="*" element={<NotFound />} />
  </Route>,
));

// const router = createBrowserRouter([
//   ...allRoutes,
//   {
//     path: '*',
//     // change Portal to 404 component
//     element: <Portal />,
//     errorElement: <Error />,
//   },
// ]);

export default router;
