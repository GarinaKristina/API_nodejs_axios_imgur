import GetConfig from './GetConfig.js';
import PostConfig from './PostConfig.js';
import DeleteConfig from './DeleteConfig.js';

class Configs {
  constructor() {
    this.GetConfig = GetConfig;
    this.PostConfig = PostConfig;
    this.DeleteConfig = DeleteConfig;
  }
}
export default new Configs();
