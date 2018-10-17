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
            <Link id='link' to='/' name='return' className='backButton'>Go back</Link>
          </div>
        </div>
        <div className='row'>
          <div className='card'>
            <div className='card-header'>Movie Details</div>
            <div className='card-body'>
              <div className='col-md-4'>
                <img id='poster' className='rounded float-left images' src={ detail.Poster !== 'N/A' ? detail.Poster : noImage } alt={ detail.Title } />
              </div>
              <div className='col-md-8'>
                <div className='col-md-12 offset-md-6'>
                  <p id='movieTitle' className='card-text paragraphs'>{ detail.Title }</p>
                  <span id='releaseYearBadge' className='card-text badge badge-success padding-right'>Released { detail.Year }</span>
                  <span id='runtimeBadge' className='card-text badge badge-success padding-right'>{ detail.Runtime }</span>
                  <span id='genreBadge' className='card-text badge badge-success padding-right'>{ detail.Genre }</span>
                  <hr className='my-4' />
                  <p id='director' className='card-text paragraphs'><strong>Director: </strong>{ detail.Director }</p>
                  <p id='writer' className='card-text paragraphs'><strong>Writer: </strong>{ detail.Writer }</p>
                  <p id='actors' className='card-text paragraphs'><strong>Actors: </strong>{ detail.Actors }</p>
                  <p id='plot' className='card-text paragraphs'><strong>Plot: </strong>{ detail.Plot }</p>
                  <p id='awards' className='card-text paragraphs'><strong>Awards: </strong>{detail.Awards}</p>
                  <p id='metascore' className='card-text paragraphs'><strong>Metascore:</strong> { detail.Metascore }</p>
                  <p id='imdbRating' className='card-text paragraphs'><strong>IMDB: </strong> { detail.imdbRating }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}