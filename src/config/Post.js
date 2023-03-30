import { token } from '../data/token.js';
import FormData from 'form-data';
let data = new FormData();

class Post {
  get config() {
    return {
      method: 'post',
      maxBodyLength: Infinity,
      headers: {
        Authorization: token,
        ...data.getHeaders(),
      },
      data: {
        image: 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      },
    };
  }
}

export default new Post();
