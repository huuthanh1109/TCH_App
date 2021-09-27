import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api',
  //   timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
export const getProduct = params => instance.get('/v2/menu', params);
export const getAddress = params => instance.get('/get_all_store', params);
export const getProduct1 = params => instance.get('/v2/category/web', params);
