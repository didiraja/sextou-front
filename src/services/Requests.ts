import axios, { AxiosResponse } from 'axios';
import { HOST, ENDPOINT } from './enums';

export interface IApiParams {
  before?: string;
  after?: string;
  page?: number;
  per_page?: number;
}

export type IRequestReturn = Promise<AxiosResponse | undefined>;

class Request {
  private url = `${HOST}${ENDPOINT.PATH}`;

  async getEvents(
    basename = 'events',
    query: IApiParams = {},
  ): IRequestReturn {
    const queryString: string = new URLSearchParams(
      query as Record<string, string>,
    ).toString();

    // console.log('Request triggered');

    try {
      return axios.get(`${this.url}/${basename}/?${queryString}`);
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.log(`[getEvents Error] ${e.code} - ${e.message}`);

      return undefined;
    }
  }

  async getSingleEvent(
    basename = 'events',
    id: string,
  ): IRequestReturn {
    try {
      return axios.get(`${this.url}/${basename}/${id}`);
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.log(`[getEvents Error] ${e.code} - ${e.message}`);

      return undefined;
    }
  }
}

export default new Request();
