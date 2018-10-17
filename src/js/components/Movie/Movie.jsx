import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { detail, noImage } = this.props;
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <Link to='/' name='return'>Go back</Link>
          </div>
        </div>
        <div className='row'>
          <div className='card'>
            <div className='card-header'>Movie Details</div>
            <div className='card-body'>
              <div className='col-md-4'>
                <img className='rounded float-left' src={ detail.Poster !== 'N/A' ? detail.Poster : noImage } alt={ detail.Title } />
              </div>
              <div className='col-md-8'>
                <div className='col-md-12 offset-md-6'>
                  <p className='card-text>'>{ detail.Title }</p>
                  <span className='card-text badge badge-success padding-right'>Released { detail.Year }</span>
                  <span className='card-text badge badge-success padding-right'>{ detail.Runtime }</span>
                  <span className='card-text badge badge-success padding-right'>{ detail.Genre }</span>
                  <hr className='my-4' />
                  <p className='card-text'><strong>Director: </strong>{ detail.Director }</p>
                  <p className='card-text'><strong>Writer: </strong>{ detail.Writer }</p>
                  <p className='card-text'><strong>Actors: </strong>{ detail.Actors }</p>
                  <p className='card-text'><strong>Plot: </strong>{ detail.Plot }</p>
                  <p className='card-text'><strong>Awards: </strong>{detail.Awards}</p>
                  <p className='card-text'><strong>Metascore:</strong> { detail.Metascore }</p>
                  <p className='card-text'><strong>IMDB: </strong> { detail.imdbRating }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}