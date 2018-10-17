import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getDetail } from '../../actions/MovieSearchAction';
import Movie from '../Movie/index';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.handleLink = this.handleLink.bind(this);
  }
  handleLink(title) {
    const { dispatch } = this.props;
    dispatch(getDetail(title));
  }
  render() {
    const { movieList, noImage } = this.props;
    return (
      <div className='col-12 col-md-12 mb-4'>
        <ul>
          { movieList &&
            movieList.map((movie, index) =>
              <li key={ index } >
                <div className='card'>
                  <div className='card-header'>{ movie.Title }</div>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <img className='rounded float-left img-thumbnail' src={ movie.Poster !== 'N/A' ? movie.Poster : noImage } alt={ movie.Title } />
                      </div>
                      <div className='col-md-8'>
                        <p className='card-text text-center'>Movie Title: { movie.Title }</p>
                        <p className='card-text text-center'>Release year: { movie.Year }</p>
                        <hr className='my-4' />
                        <Link
                          to={ `/movies/${movie.Title}` }
                          className='btn btn-primary float-right'
                          type='button'
                          value={ movie.Title }
                          onClick={ () => this.handleLink(movie.Title) }
                        > More Information </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </li>)}
        </ul>
      </div>
    );
  }
}

export default MovieList;
