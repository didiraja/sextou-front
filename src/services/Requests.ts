import axios from "axios";

class Request {
  private url: string = "http://sextou.local/wp-api/sextou/v1/events";

  // constructor() {
  //   // this.url = ;
  // }

  async getPosts(query: string = "") {
    //
    try {
      // TODO: dynamic weekend on request
      return axios.get(`${this.url}/?after=2023-01-13&${query}`);
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
