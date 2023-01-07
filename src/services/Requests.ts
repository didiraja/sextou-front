import axios from "axios";

// type RequestResponse = {
//   // dynamic key and any response
//   [key: string]: any;
//   name: string;
// };

class Request {
  private url: string;

  constructor() {
    this.url = "http://sextou.local/wp-api/wp/v2";
  }

  // http://sextou.local/wp-api/wp/v2/posts/
  async getPosts(query: string = "") {
    return axios.get(`${this.url}/posts?${query}`);
  }

  // http://sextou.local/wp-api/wp/v2/categories/1
  async getCatName(id: number) {
    return axios.get(`${this.url}/categories/${id}`);
  }

  // http://sextou.local/wp-api/wp/v2/media/33
  async getMedia(id: number) {
    return axios.get(`${this.url}/media/${id}`);
  }
}

export default new Request();
