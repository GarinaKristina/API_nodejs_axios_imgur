import axios from 'axios';
import ConfigsFactory from '../src/config/ConfigsFactory.js';
import { expect } from 'chai';

describe('API testing', async () => {
  it('In GET request, status code is equal 200', async () => {
    const response = await axios(ConfigsFactory.Get.config);
    let statusResult = response.data.status;
    expect(statusResult).to.equal(200);
  });
}),
  it('In POST request, status code is equal "200" and type of image includes "gif"', async () => {
    const response = await axios(ConfigsFactory.Post.config);
    let statusResult = response.data.status;
    let imageType = response.data.data.type;
    expect(statusResult).to.equal(200);
    expect(imageType).to.include('gif');
  }),
  it('In DELETE request, status code is equal "true""', async () => {
    const response = await axios(ConfigsFactory.Delete.config);
    let deletedStatus = response.data.success;
    expect(deletedStatus).to.equal(true);
  }),
  it('In PUT request, status code is equal "200"', async () => {
    const response = await axios(ConfigsFactory.Put.config);
    let statusResult = response.data.status;
    expect(statusResult).to.equal(200);
  });
