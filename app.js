import axios from 'axios';

var config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.imgur.com/3/image/rHPxPFU',
  headers: {
    Authorization: 'Bearer 609bfe9e8fb1dd07a9604402a09900429f3813ae',
  },
};

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
