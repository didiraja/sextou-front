import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootTemplate from './routes/RootTemplate';
import Home, { HomeLoader } from './routes/Home';
import Category, { CategoryLoader } from './routes/Category';
import SingleEvent, { SingleEventLoader } from './routes/Single';
import NotFound from './routes/NotFound';
import Error from './routes/Error';

const router = createBrowserRouter(createRoutesFromElements(
  <Route
    path="/"
    element={<RootTemplate />}
    errorElement={<Error />}
  >
    <Route
      index
      loader={HomeLoader}
      element={<Home />}
      errorElement={<Error />}
    />

    <Route path="category">
      <Route
        path=":entry"
        loader={CategoryLoader}
        element={<Category />}
      />
    </Route>

    <Route path="event">
      <Route
        path=":id"
        element={<SingleEvent />}
        loader={SingleEventLoader}
      />
    </Route>

    <Route
      path="*"
      element={<NotFound />}
    />

  </Route>,
));

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
