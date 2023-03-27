import UrlData from '../data/UrlData.js';
import { token } from '../data/token.js';

class Get {
  get config() {
    return {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${UrlData.baseUrl}${UrlData.imageUrl}`,
      headers: {
        Authorization: token,
      },
    };
  }
}

export default new Get();
