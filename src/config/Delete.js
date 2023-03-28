import UrlData from '../data/UrlData.js';
import { token } from '../data/token.js';
import FormData from 'form-data';
let data = new FormData();

class Delete {
  get config() {
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

export default new Delete();
