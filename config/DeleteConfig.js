import UrlData from './UrlData.js';
import { token } from './token.js';
import FormData from 'form-data';
let data = new FormData();

class DeleteConfig {
  get deleteConfig() {
    return {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${UrlData.baseUrl}${UrlData.deleteImageHash}`,
      headers: {
        Authorization: token,
        ...data.getHeaders(),
      },
      data: data,
    };
  }
}

export default new DeleteConfig();
