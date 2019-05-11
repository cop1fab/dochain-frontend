import axios from 'axios';
import store from '../store';

const {
  data: { token },
} = store.getState().currentUser;

const baseURL = process.env.API_URL || 'https://dochain-api.herokuapp.com';

const http = axios.create({
  baseURL,
  headers: {
    Authorization: token || undefined,
  },
});

http.prototype.updateToken = function() {
  console.log(this.headers);
};

export default http;
