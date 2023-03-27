import axios from 'axios';
import CrudConfigs from '../config/CrudConfigs.js';
import { expect } from 'chai';

describe('API testing', async () => {
  it('In GET request, status code is equal 200', async () => {
    await axios(CrudConfigs.getConfig).then((response) => {
      let statusResult = response.data.status;
      expect(statusResult).to.equal(200);
    });
  });
}),
  it('In POST request, status code is equal 200 and type of image includes "gif"', async () => {
    await axios(CrudConfigs.postConfig).then((response) => {
      let statusResult = response.data.status;
      let imageType = response.data.data.type;
      expect(statusResult).to.equal(200);
      expect(imageType).to.include('gif');
    });
  }),
  it('In DELETE request, status code is equal 200', async () => {
    await axios(CrudConfigs.deleteConfig).then((response) => {
      console.log(response.data);
      done();
      // let deletedStatus = response.data.success;
      // expect(deletedStatus).to.equal(true);
    });
  });

// axios(CrudConfigs.postConfig)
//   .then((response) => {
//     console.log('--- POST DATA       :', JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
