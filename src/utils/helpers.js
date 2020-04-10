import axios from 'axios';

export async function postData(url = '', data = {}) {
  const oResponse = axios({
    method: 'post',
    url: url,
    data: data,
    responseType: 'json',
  })
    .then(function(oResp) {
      return oResp;
    })
    .catch(function(oErr) {
      return oErr;
    });

  return oResponse;
}

export async function getData(url) {
  const oResponse = axios({
    method: 'get',
    url: url,
  })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  return oResponse;
}
