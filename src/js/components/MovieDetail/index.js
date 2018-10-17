import { connect } from 'react-redux';
import MovieDetail from './MovieDetail';

function mapStoreToProps(store) {
  return {
    input: store.search.input,
    detail: store.search.detail,
    movieList: store.search.movieList,
    noImage: store.search.noImage
  };
}

export default connect(mapStoreToProps)(MovieDetail);
