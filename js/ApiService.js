import { REACT_APP_API_APP_ID, REACT_APP_API_APP_KEY } from '@env';
export default {
  async getData(url = '', data = '') {
    console.log(url + `?app_id=${REACT_APP_API_APP_ID}&app_key=${REACT_APP_API_APP_KEY}&${data}`);
    const response = await fetch(
      url + `?app_id=${REACT_APP_API_APP_ID}&app_key=${REACT_APP_API_APP_KEY}&${data}`
    );
    const jsonData = await response.json();
    return {
      ok: response.ok,
      status: response.status,
      data: jsonData
    };
  }
};
