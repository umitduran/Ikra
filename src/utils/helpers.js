import axios from 'axios';

const url = 'https://ikra-back.herokuapp.com/api';

export async function postData(sEntity = '', data = {}) {
  try {
    const oResponse = await axios({
      method: 'post',
      url: url + sEntity,
      data: data,
      responseType: 'json',
    });
    return oResponse;
  } catch (error) {
    return error;
  }
}
