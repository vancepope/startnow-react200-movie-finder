import React, { Component } from 'react';
import { addSearchInput, getMovie } from '../../actions/MovieSearchAction';
import MovieList from '../MovieList/index';

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleInput(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(addSearchInput(value));
  }
  handleClick(e) {
    e.preventDefault();
    const { input, dispatch } = this.props;
    dispatch(getMovie(input));
  }
  render() {
    const { input } = this.props;
    return (
      <div>
        <h1 id='appTitle'>Movie Finder</h1>
        <div className='row'>
          <div className='col-12 col-md-12 mb-4'>
            <div className='input-group'>
              <input
                id='movieInput'
                placeholder='Enter a movie name'
                type='text'
                className='form-control'
                onChange={ this.handleInput }
                value={ input }
              />
              <span className='input-group-btn'>
                <button id='movieButton' className='btn btn-primary' type='button' onClick={ this.handleClick }>Go!</button>
              </span>
            </div>
          </div>
        </div>
        <div className='row'>
          <MovieList />
        </div>
      </div>
    );
  }
}

export default MovieSearch;

