const defaultState = {
  input: '',
  moviesList: [],
  detail: [],
  noImage: 'img/na.png',
  error: null
};

function searchReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_SEARCH_INPUT':
      return Object.assign({}, state, { input: payload.input });
    case 'GET_MOVIE_PENDING':
      return state;
    case 'GET_MOVIE_FULFILLED':
      return { ...state,
        movieList: action.payload.data.Search
      };
    case 'GET_MOVIE_REJECTED':
      return { ...state, error: `${action.payload.message}` };
    case 'GET_DETAIL_PENDING':
      return state;
    case 'GET_DETAIL_FULFILLED':
      return { ...state, detail: payload.data };
    case 'GET_DETAIL_REJECTED':
      return { ...state, error: `${action.payload.message}` };
    default:
      return state;
  }
}

export default searchReducer;
