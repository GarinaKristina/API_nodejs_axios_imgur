import axios from 'axios';
import ConfigsFactory from '../config/ConfigsFactory.js';
import { expect } from 'chai';

describe('API testing', async () => {
  it('In GET request, status code is equal 200', async () => {
    await axios(ConfigsFactory.Get.config).then((response) => {
      let statusResult = response.data.status;
      expect(statusResult).to.equal(200);
    });
  });
}),
  it('In POST request, status code is equal "200" and type of image includes "gif"', async () => {
    await axios(ConfigsFactory.Post.config).then((response) => {
      let statusResult = response.data.status;
      let imageType = response.data.data.type;
      expect(statusResult).to.equal(200);
      expect(imageType).to.include('gif');
    });
  }),
  it('In DELETE request, status code is equal "true""', async () => {
    await axios(ConfigsFactory.Delete.config).then((response) => {
      let deletedStatus = response.data.success;
      expect(deletedStatus).to.equal(true);
    });
  });
it('In PUT request, status code is equal "200"', async () => {
  await axios(ConfigsFactory.Put.config).then((response) => {
    let statusResult = response.data.status;
    expect(statusResult).to.equal(200);
  });
});
