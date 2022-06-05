import axios from 'axios';
import qs from 'qs';

const apiBaseUrl = 'http://localhost:1337';

const basicQuery = {
  _sort: 'Date:ASC',
    _limit: 9,
    _publicationState:'live',
    Date_gte: (new Date().toISOString()),
    Highlight: false
};

export const GetEvents = () => {

  const querySearch = qs.stringify({...basicQuery});

  return axios.get(`${apiBaseUrl}/events?${querySearch}`);
};

export const GetHighlights = () => {

  const querySearch = qs.stringify({...basicQuery, _limit: 3, Highlight: true});

  return axios.get(`${apiBaseUrl}/events?${querySearch}`);
};