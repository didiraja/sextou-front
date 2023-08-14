import {
  defer, LoaderFunctionArgs, redirect, useLoaderData, useLocation, useNavigate,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { AxiosResponse } from 'axios';
import Requests from '../services/Requests';
import useTitle from '../hooks/useTitle';
import Content, { IEventProps } from '../components/atoms/Content';
import { ENDPOINT } from '../services/enums';
import GracefulLoad from '../components/hocs/GracefulLoadCards';
import { removeNumberAfterLastSlash } from '../services/utils';
import './Single.pcss';

export async function SingleEventLoader({ params: { id } }: LoaderFunctionArgs) {
  if (!id) {
    return redirect('/');
  }

  const result = await Requests.getSingleEvent(ENDPOINT.SINGLE, id);

  return defer({
    result,
  });
}

function SingleEvent() {
  const singleLoader = useLoaderData() as AxiosResponse<IEventProps>;

  const { data: { slug, title } } = singleLoader.result;

  useTitle(`${title} - Sextou!`);

  const location = useLocation();
  const navigate = useNavigate();

  const updatedURL = `${removeNumberAfterLastSlash(location.pathname)}${slug}`;

  window.history.replaceState(null, '', updatedURL);

  const history = createBrowserHistory();

  function handleBackdrop(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const isBackdrop: boolean = evt.target === evt.currentTarget;

    if (isBackdrop) {
      return;
    }

    return null;
  }

  return (
    <div className="backdrop" onClick={handleBackdrop}>
      <div className="single--wrapper">
        <GracefulLoad loaderData={singleLoader.result}>
          {({ loaderData }) => (
            <div className="single--event">
              <Content {...loaderData} mode="Single" />
            </div>
          )}
        </GracefulLoad>
      </div>
    </div>
  );
}

export default SingleEvent;
