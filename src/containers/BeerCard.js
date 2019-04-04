import React from 'react';
import { Link } from 'react-router-dom';

export default function BeerCard(props) {
  const beer = props.beers.filter(
    (beer) => beer.id === parseInt(props.match.params.id, 10),
  )[0];
  return (
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
      <h1>{beer.name}</h1>
      <h1 style={{ marginBottom: '1rem' }}>{beer.likes}</h1>
      <div>
        <button
          onClick={(event) => props.likeHandler(event, beer)}
          value="increase"
          style={{
            background: '#3891A6',
            border: '2px solid white',
            color: 'white',
            height: '2rem',
            width: '2rem',
            borderRadius: '4px',
            margin: '1rem',
            cursor: 'pointer',
            marginTop: 0,
          }}
        >
          +
        </button>
        <button
          onClick={(event) => props.likeHandler(event, beer)}
          value="decrease"
          style={{
            background: '#3891A6',
            border: '2px solid white',
            color: 'white',
            height: '2rem',
            width: '2rem',
            borderRadius: '4px',
            margin: '1rem',
            cursor: 'pointer',
            marginTop: 0,
          }}
        >
          -
        </button>
      </div>
      <Link to="/">
        <button
          style={{
            background: '#DB5461',
            color: 'white',
            fontWeight: 'bold',
            border: '2px solid white',
            borderRadius: '4px',
            cursor: 'pointer',
            padding: '.25rem .5rem',
            margin: '0 auto',
            width: '65px',
          }}
        >
          Home
        </button>
      </Link>
    </div>
  );
}
