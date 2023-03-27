import UrlData from './UrlData.js';
import { token } from './token.js';

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
