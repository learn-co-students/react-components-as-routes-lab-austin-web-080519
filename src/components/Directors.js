import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map( (actor, key) => {
        return (
          <div>
           {actor.name}
            <br></br>
            <ul>
              {actor.movies.map( m => <li>{m}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
