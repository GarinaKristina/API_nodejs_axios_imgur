import Get from './Get.js';
import Post from './Post.js';
import Delete from './Delete.js';
import Put from './Put.js';

class ConfigsFactory {
  constructor() {
    this.Get = Get;
    this.Post = Post;
    this.Delete = Delete;
    this.Put = Put;
  }
}
export default new ConfigsFactory();
