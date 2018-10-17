import { connect } from 'react-redux';
import Movie from './Movie';

function mapStoreToProps(store) {
  return {
    detail: store.search.detail,
    noImage: store.search.noImage
  };
}

export default connect(mapStoreToProps)(Movie);
