import UrlData from '../data/UrlData.js';
import { token } from '../data/token.js';
import FormData from 'form-data';
let data = new FormData();
data.append('image', 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');

class Post {
  get config() {
    return {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${UrlData.baseUrl}${UrlData.uploadImageUrl}`,
      headers: {
        Authorization: token,
        ...data.getHeaders(),
      },

      data: data,
    };
  }
}

export default new Post();
