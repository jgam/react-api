import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'b8ea99bee79793ee5cbdb7caf126e4ea',
    language: 'en-US',
  },
});

api.get('tv/popular');

export default api;
