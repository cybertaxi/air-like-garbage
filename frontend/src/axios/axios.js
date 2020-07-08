import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.data.gov.sg/v1/environment/',
});

export default instance;