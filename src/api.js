import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'b8ea99bee79793ee5cbdb7caf126e4ea',
    language: 'en-US',
  },
});

const apiImage = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://image.tmdb.org/t/p/w500/',
  params: {
    api_key: 'b8ea99bee79793ee5cbdb7caf126e4ea',
    language: 'en-US',
  },
});

const apiproxy = axios.create({
  baseURL: 'https://yts-proxy.now.sh',
});
export const getMoives = (page = 1) =>
  api.get('/list_movies.json', { params: { page, limit: 20 } });

const proxyurl = 'https://cors-anywhere.herokuapp.com/';

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  movieImage: (id) =>
    apiImage.get(`${id}`, {
      params: {},
    }),
  search: (term) =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
