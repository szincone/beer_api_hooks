import React from 'react';
import { Link } from 'react-router-dom';

export default function AllBeers(props) {
  return (
    <>
      <h1 style={{ color: 'white' }}>
        World of Beer{' '}
        <span role="img" aria-label="beer">
          🍺
        </span>
      </h1>
      <Link to="/add_new_beer">
        <button
          value="addNew"
          style={{
            background: '#DB5461',
            fontWeight: 'bold',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer',
            padding: '.25rem .5rem',
            border: '2px solid white',
          }}
        >
          Add New Beer
        </button>
      </Link>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {props.beers
          .filter((beer) => beer.name !== '')
          .map((beer) => (
            <Link
              to={`/beers/${beer.id}`}
              style={{ textDecoration: 'none', color: 'black' }}
              key={beer.id}
            >
              <div
                style={{
                  background: '#DB5461',
                  color: 'white',
                  margin: '1rem',
                  textAlign: 'center',
                  padding: '1rem',
                  border: '2px solid white',
                  borderRadius: '4px',
                }}
              >
                <h1>
                  {beer.name.length > 10
                    ? beer.name.substring(0, 10) + '...'
                    : beer.name}
                </h1>
                <h1>{beer.likes}</h1>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
