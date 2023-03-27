import UrlData from './UrlData.js';
import { token } from './token.js';

class GetConfig {
  get getConfig() {
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

export default new GetConfig();
