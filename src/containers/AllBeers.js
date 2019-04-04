import React from 'react';
import { Link } from 'react-router-dom';

export default function BeerCard(props) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {props.beers
        .filter((beer) => beer.name !== '')
        .map((beer) => (
          <Link to={`/beers/${beer.id}`} key={beer.id}>
            <div style={{ background: 'red', margin: '1rem' }}>
              <h1>{beer.name}</h1>
              <h1>{beer.likes}</h1>
            </div>
          </Link>
        ))}
    </div>
  );
}
