import { combineReducers } from 'redux';
import MovieSearchReducer from './reducers/MovieSearchReducer';

const rootReducer = combineReducers({
  search: MovieSearchReducer,
});

export default rootReducer;
