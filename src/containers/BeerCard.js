import React from 'react';
import { Link } from 'react-router-dom';

export default function BeerCard(props) {
  const beer = props.beers.filter(
    (beer) => beer.id === parseInt(props.match.params.id, 10),
  )[0];
  return (
    <>
      <h1>{beer.name}</h1>
      <h1>{beer.likes}</h1>
      <div>
        <button
          onClick={(event) => props.likeHandler(event, beer)}
          value="increase"
        >
          +
        </button>
        <button
          onClick={(event) => props.likeHandler(event, beer)}
          value="decrease"
        >
          -
        </button>
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}
