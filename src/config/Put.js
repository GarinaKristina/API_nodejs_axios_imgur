import UrlData from '../data/UrlData.js';
import { token } from '../data/token.js';
import FormData from 'form-data';
let data = new FormData();
data.append('title', 'My dank meme album');
data.append('description', 'This album contains a lot of dank memes. Be prepared.');

class Put {
  get config() {
    return {
      method: 'put',
      maxBodyLength: Infinity,
      url: `${UrlData.baseUrl}${UrlData.updateImage}`,
      headers: {
        Authorization: token,
        ...data.getHeaders(),
      },

      data: data,
    };
  }
}

export default new Put();
