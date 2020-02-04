import axios from 'axios';
import urls from '../consts';

const api = axios.create({
    baseURL: urls.API_URL
});

export default api;