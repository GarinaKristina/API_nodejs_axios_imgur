import { token } from '../data/token.js';
import FormData from 'form-data';
let data = new FormData();

class Delete {
  get config() {
    return {
      method: 'delete',
      maxBodyLength: Infinity,
      headers: {
        Authorization: token,
        ...data.getHeaders(),
      },
      data: data,
    };
  }
}

export default new Delete();
