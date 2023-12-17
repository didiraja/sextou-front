import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootTemplate from './routes/RootTemplate';
// import Home, { HomeLoader } from './routes/Home';
import Category, { CategoryLoader } from './routes/Category';
import SingleEvent, { SingleEventLoader } from './routes/Single';
import NotFound from './routes/NotFound';
import Maintenance from './routes/Maintenance';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootTemplate,
    children: [
      // *** MAINTENANCE MODE ***
      {
        path: '/',
        Component: Maintenance,
        children: [
          {
            path: 'page/:page',
            Component: Maintenance,
          },
        ],
      },
      // *** RELEASE MODE ***
      // {
      //   path: '/',
      //   loader: HomeLoader,
      //   Component: Home,
      //   children: [
      //     {
      //       path: 'page/:page',
      //       loader: HomeLoader,
      //       Component: Home,
      //     },
      //   ],
      // },
      {
        path: 'event/:id',
        loader: SingleEventLoader,
        Component: SingleEvent,
      },
      {
        path: 'category/:entry',
        loader: CategoryLoader,
        Component: Category,
        children: [
          {
            path: 'page/:page',
            loader: CategoryLoader,
            Component: Category,
          },
        ],
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
