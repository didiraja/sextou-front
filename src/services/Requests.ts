import axios, { AxiosResponse } from "axios";
import { CardProps } from "../components/molecules/Card";
import { HOST, ENDPOINT } from "./enums";

export interface IApiParams {
  before?: string;
  after?: string;
  page?: number;
  per_page?: number;
}

type IRequestReturn = Promise<AxiosResponse | undefined>;

class Request {
  private url: string = `${HOST}${ENDPOINT.MAIN}`;

  // constructor() {
  //   // this.url = ;
  // }

  async getEvents(
    basename: string = "events",
    query: IApiParams = {}
  ): IRequestReturn {
    const queryString: string = new URLSearchParams(
      query as Record<string, string>
    ).toString();

    try {
      return axios.get(`${this.url}/${basename}/?${queryString}`);
    } catch (e: any) {
      console.log(`[getEvents Error] ${e.code} - ${e.message}`);

      return undefined;
    }
  }

  async highlightEvents() {}

  async regularEvents() {}

  /**
   * @DEPRECATED after custom WP API
   */
  // // http://sextou.local/wp-api/wp/v2/categories/1
  // async getCatName(id: number) {
  //   return axios.get(`${this.url}/categories/${id}`);
  // }

  // // http://sextou.local/wp-api/wp/v2/media/33
  // async getMedia(id: number) {
  //   try {
  //     return axios.get(`${this.url}/media/${id}`);
  //   } catch (e: AxiosError<any>) {
  //     console.log(`[getMedia Error] ${e.code} - ${e.message}`);

  //     return [];
  //   }
  // }
}

export default new Request();
