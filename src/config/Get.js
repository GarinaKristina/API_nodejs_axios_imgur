import { token } from '../data/token.js';

class Get {
  get config() {
    return {
      method: 'get',
      maxBodyLength: Infinity,
      headers: {
        Authorization: token,
      },
    };
  }
}

export default new Get();
