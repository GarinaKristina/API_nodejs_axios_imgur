import axios from 'axios';
import Configs from '../config/Configs.js';
import { expect } from 'chai';

describe('API testing', async () => {
  it('In GET request, status code is equal 200', async () => {
    await axios(Configs.GetConfig.getConfig).then((response) => {
      let statusResult = response.data.status;
      expect(statusResult).to.equal(200);
    });
  });
}),
  it('In POST request, status code is equal "200" and type of image includes "gif"', async () => {
    await axios(Configs.PostConfig.postConfig).then((response) => {
      let statusResult = response.data.status;
      let imageType = response.data.data.type;
      expect(statusResult).to.equal(200);
      expect(imageType).to.include('gif');
    });
  }),
  it('In DELETE request, status code is equal "true""', async () => {
    await axios(Configs.DeleteConfig.deleteConfig).then((response) => {
      let deletedStatus = response.data.success;
      expect(deletedStatus).to.equal(true);
    });
  });
it('In PUT request, status code is equal "200"', async () => {
  await axios(Configs.PutConfig.putConfig).then((response) => {
    let statusResult = response.data.status;
    expect(statusResult).to.equal(200);
  });
});
