import React from 'react';
import { Link } from 'react-router-dom';

export default function AddNewBeer(props) {
  return (
    <>
      <form onSubmit={props.addNewBeer}>
        <input
          onChange={props.inputChangeHandler}
          name="name"
          value={props.newBeerName}
        />
        <input
          onChange={props.inputChangeHandler}
          name="likes"
          value={props.newBeerLikes}
        />
        <button>Submit</button>
      </form>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}
