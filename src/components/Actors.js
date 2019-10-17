import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className='actor'>
      <h1>Actors Page</h1>
      {actors.map( (actor, key) => {
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
};

export default Actors;
