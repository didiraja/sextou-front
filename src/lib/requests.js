import axios from 'axios';
import qs from 'qs';
// import { format } from 'date-fns';
// startOfToday 

const apiBaseUrl = 'http://localhost:1337'

export async function getEvents() {

  const querySearch = qs.stringify({
    _sort: 'Date:ASC',
    _limit: 9,
    _publicationState:'live',
    Date_gte: (new Date().toISOString()),
  });

  return await axios.get(`${apiBaseUrl}/events?${querySearch}`);
};