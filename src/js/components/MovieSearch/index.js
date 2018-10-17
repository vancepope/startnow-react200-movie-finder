import { connect } from 'react-redux';
import MovieSearch from './MovieSearch';

function mapStoreToProps(store){
  return {
    input: store.search.input,
    movieList: store.search.movieList,
    detail: store.search.detail,
    noImage: store.search.noImage
  };
}

export default connect(mapStoreToProps)(MovieSearch);

