import axios from 'axios';
import qs from 'qs';

const apiBaseUrl = 'http://localhost:1337';

export const GetEvents = () => {

  const querySearch = qs.stringify({
    _sort: 'Date:ASC',
    _limit: 9,
    _publicationState:'live',
    Date_gte: (new Date().toISOString()),
  });

  return axios.get(`${apiBaseUrl}/events?${querySearch}`);
};