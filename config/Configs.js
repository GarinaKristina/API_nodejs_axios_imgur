import GetConfig from './GetConfig.js';
import PostConfig from './PostConfig.js';
import DeleteConfig from './DeleteConfig.js';
import PutConfig from './PutConfig.js';
class Configs {
  constructor() {
    this.GetConfig = GetConfig;
    this.PostConfig = PostConfig;
    this.DeleteConfig = DeleteConfig;
    this.PutConfig = PutConfig;
  }
}
export default new Configs();
