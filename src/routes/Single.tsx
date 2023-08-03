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

      {/* <Title>{title}</Title>

      <div className="single-event--header">
        <div className="date">
          {Date.readableDate(eventDate)}
        </div>

        <div className="categories-wrapper">
          {categories?.map((item: WPTermObject, index: number) => (
            <Button
              pill
              href={`/category/${item.slug}`}
              key={index}
              target="_self"
              onClick={(evt) => evt.stopPropagation()}
            >
              {item.name}
            </Button>
          )) ?? null}
        </div>

        <Button
          href={tickets}
          target="_blank"
          onClick={(evt) => evt.stopPropagation()}
          className={!tickets ? 'no-tickets' : ''}
          disabled={!tickets}
          free={free}
        >
          {BtnTxtReducer(singleEvent.data)}
        </Button>
      </div>

      <img className="single-event--cover" src={cover} alt={title} />

      <p
        className="single-event--description"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: description }}
      /> */}

    </div>
  );
}

export default SingleEvent;
