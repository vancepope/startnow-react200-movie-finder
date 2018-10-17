const axios = require('axios');

export function addSearchInput(input) {
  return {
    type: 'ADD_SEARCH_INPUT',
    payload: { input }
  };
}

export function getMovie(movie) {
  return {
    type: 'GET_MOVIE',
    payload: axios.get(`/movies/${movie}`)
  };
}

export function getDetail(title) {
  return {
    type: 'GET_DETAIL',
    payload: axios.get(`/movie/${title}`)
  };
}
