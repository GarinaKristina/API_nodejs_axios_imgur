import { token } from '../data/token.js';
import FormData from 'form-data';
let data = new FormData();

class Put {
  get config() {
    return {
      method: 'put',
      maxBodyLength: Infinity,
      headers: {
        Authorization: token,
        ...data.getHeaders(),
      },
      data: {
        title: 'My dank meme album',
        description: 'This album contains a lot of dank memes. Be prepared.',
      },
    };
  }
}

export default new Put();
