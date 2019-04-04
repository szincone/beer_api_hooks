import React from 'react';
import { Link } from 'react-router-dom';

export default function AddNewBeer(props) {
  const buttonStyle = {
    background: '#DB5461',
    fontWeight: 'bold',
    color: 'white',
    border: '2px solid white',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '.25rem .5rem',
    margin: '0 auto',
    width: '65px',
  };
  return (
    <>
      <h1 style={{ color: 'white' }}>Add New Form</h1>
      <form
        onSubmit={props.addNewBeer}
        style={{
          textAlign: 'center',
          marginBottom: '1rem',
          background: '#DB5461',
          border: '2px solid white',
          borderRadius: '4px',
          width: '300px',
          height: '140px',
          display: 'flex',
          padding: '1rem',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ margin: 0, color: 'white' }}>Name</h4>
          <input
            onChange={props.inputChangeHandler}
            name="name"
            placeholder="New Beer Name..."
            value={props.newBeerName}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ margin: 0, color: 'white' }}>Likes</h4>
          <input
            onChange={props.inputChangeHandler}
            name="likes"
            placeholder="New Beer Likes..."
            value={props.newBeerLikes}
          />
        </div>
        <button style={buttonStyle}>Submit</button>
      </form>
      <Link to="/">
        <button style={buttonStyle}>Home</button>
      </Link>
    </>
  );
}
