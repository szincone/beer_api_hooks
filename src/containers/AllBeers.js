import React from 'react';
import { Link } from 'react-router-dom';

export default function AllBeers(props) {
  return (
    <>
      <Link to="/add_new_beer">
        <button
          value="addNew"
          style={{
            background: 'red',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            padding: '.25rem .5rem',
          }}
        >
          Add New
        </button>
      </Link>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {props.beers
          .filter((beer) => beer.name !== '')
          .map((beer) => (
            <Link
              to={`/beers/${beer.id}`}
              style={{ textDecoration: 'none', color: 'white' }}
              key={beer.id}
            >
              <div
                style={{
                  background: 'red',
                  margin: '1rem',
                  textAlign: 'center',
                  padding: '1rem',
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
