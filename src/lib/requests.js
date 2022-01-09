import axios from 'axios';

const apiBaseUrl = 'http://localhost:1337'

export async function getEvents() {

  return await axios.get(`${apiBaseUrl}/events`);
};