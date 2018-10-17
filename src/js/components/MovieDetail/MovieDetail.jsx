import React, { Component } from 'react';
import Movie from '../Movie/index';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Movie Finder</h1>
        <Movie />
      </div>
    );
  }
}

export default MovieDetail;

