import  axios  from 'axios';

export const key = '';

const api = axios.create({
    baseURL: 'https://app-catarina.herokuapp.com'
})

export default api;