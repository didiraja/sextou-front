import axios, { AxiosResponse } from "axios";
import { GenericObject } from "../types";

class Request {
  private url: string = "http://sextou.local/wp-api/sextou/v1/events";

  // constructor() {
  //   // this.url = ;
  // }

  async getPosts(/* query: string = "" */) {
    //
    try {
      return axios.get(`${this.url}/?after=2023-01-13`);
    } catch (e: any) {
      console.log(`[getPosts Error] ${e.code} - ${e.message}`);

      return [];
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
