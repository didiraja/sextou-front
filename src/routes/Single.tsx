import {
  LoaderFunctionArgs, redirect, useLoaderData, useLocation,
} from 'react-router-dom';
import { AxiosResponse } from 'axios';
import Requests from '../services/Requests';
import Title from '../components/atoms/Title';
import Date from '../services/Date';
import Button from '../components/atoms/Button';
import Content, { BtnTxtReducer, IEventProps } from '../components/atoms/Content';
import './Single.pcss';

import {
  ENDPOINT, ERROR,
} from '../services/enums';
import { WPTermObject } from '../types';

export async function SingleEventLoader({ params: { id } }: LoaderFunctionArgs) {
  /**
   * validate number on id string
   * if not number, redirect
   * do fetch()
  */

  if (!id || Number.isNaN(Number(id))) {
    return redirect('/');
  }

  try {
    const result = await Requests.getSingleEvent(ENDPOINT.MAIN, id);

    return result;
  } catch (error: any) {
    // console.log(error);
    // eslint-disable-next-line no-console
    console.log(`${error.code} - ${error.message}`);

    throw Error(ERROR.LOADING);
  }
}

function SingleEvent() {
  const singleEvent = useLoaderData() as AxiosResponse<IEventProps>;

  const location = useLocation();

  function removeNumberAfterLastSlash(inputString: string) {
    const lastSlashIndex = inputString.lastIndexOf('/');
    if (lastSlashIndex !== -1) {
      return inputString.substring(0, lastSlashIndex + 1);
    }
    return inputString;
  }

  const {
    slug, title, categories, cover, description, tickets, event_date: eventDate, free,
  } = singleEvent.data;

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
