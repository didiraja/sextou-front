import {
  defer, LoaderFunctionArgs, redirect, useLoaderData, useLocation,
} from 'react-router-dom';
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

  const updatedURL = `${removeNumberAfterLastSlash(location.pathname)}${slug}`;

  window.history.replaceState(null, '', updatedURL);

  return (
    <GracefulLoad loaderData={singleLoader.result}>
      {({ loaderData }) => (
        <div className="single--wrapper card-surface">
          <Content {...loaderData} mode="Single" />
        </div>
      )}
    </GracefulLoad>
  );
}

export default SingleEvent;
