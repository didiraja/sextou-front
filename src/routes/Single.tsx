import {
  LoaderFunctionArgs, redirect, useLoaderData, useLocation,
} from 'react-router-dom';
import { AxiosResponse } from 'axios';
import Requests from '../services/Requests';
import useTitle from '../hooks/useTitle';
import Content, { IEventProps } from '../components/atoms/Content';
import {
  ENDPOINT,
} from '../services/enums';
import './Single.pcss';

export async function SingleEventLoader({ params: { id } }: LoaderFunctionArgs) {
  if (!id) {
    return redirect('/');
  }

  try {
    const result = await Requests.getSingleEvent(ENDPOINT.SINGLE, id);

    return result;
  } catch (error: any) {
    // console.log(error);
    // eslint-disable-next-line no-console
    console.log(`${error.code} - ${error.message}`);

    return redirect('/not-found');
  }
}

function SingleEvent() {
  const singleEvent = useLoaderData() as AxiosResponse<IEventProps>;

  const { slug, title } = singleEvent.data;

  useTitle(`${title} - Sextou!`);

  const location = useLocation();

  function removeNumberAfterLastSlash(inputString: string) {
    const lastSlashIndex = inputString.lastIndexOf('/');
    if (lastSlashIndex !== -1) {
      return inputString.substring(0, lastSlashIndex + 1);
    }
    return inputString;
  }

  const updatedURL = `${removeNumberAfterLastSlash(location.pathname)}${slug}`;

  window.history.replaceState(null, '', updatedURL);

  return (
    <div className="single-event--wrapper card-surface">
      <Content {...singleEvent.data} mode="Single" />
    </div>
  );
}

export default SingleEvent;
