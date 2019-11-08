import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map( (movie, key) => {
          return(
            <div key={key}>
              {movie.title}
              <br></br>
              {movie.time}
              <ul>
                {movie.genres.map( g => <li>{g}</li>)}
              </ul>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
