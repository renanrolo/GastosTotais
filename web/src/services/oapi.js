import axios from 'axios';
import urls from '../consts';

const oapi = axios.create({
    baseURL: urls.OAPI_URL
});

export default oapi;