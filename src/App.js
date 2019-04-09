import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { Grid, withStyles } from '@material-ui/core';
import BeerCard from './containers/BeerCard';
import AllBeers from './containers/AllBeers';
import AddNewBeer from './containers/AddNewBeer';

const styles = (theme) => ({
  appContainer: {
    maxWidth: '800px',
    background: '#3891A6',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem auto',
  },
  containerWidth: { maxWidth: '800px' },
});

function App({ classes }) {
  const [beers, setBeers] = useState([]);
  const [newBeerName, setNewBeerName] = useState('');
  const [newBeerLikes, setNewBeerLikes] = useState(0);

  const fetchBeers = async () => {
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer',
    );
    setBeers(response.data);
  };

  // this useEffect hook acts like componentDidMount
  useEffect(() => {
    fetchBeers();
  }, []);

  // form methods
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'likes') {
      setNewBeerLikes(value);
    } else {
      setNewBeerName(value);
    }
  };

  const addNewBeer = async (event) => {
    event.preventDefault();
    const newBeer = {
      name: newBeerName,
      likes: newBeerLikes,
    };
    await axios.post(
      'https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer',
      newBeer,
    );
    setNewBeerLikes('');
    setNewBeerName('');
  };
  // end form methods

  const likeHandler = async (event, curBeer) => {
    let newLikes = curBeer.likes;
    if (event.target.value === 'increase') {
      newLikes += 1;
    } else if (event.target.value === 'decrease') {
      newLikes -= 1;
    }
    const modifiedLikes = {
      likes: newLikes,
    };
    await axios.put(
      `https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/${
        curBeer.id
      }`,
      modifiedLikes,
    );
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer',
    );
    setBeers(response.data);
  };

  return (
    <Grid className={classes.appContainer}>
      <Route
        exact
        path="/"
        render={(props) => <AllBeers {...props} beers={beers} />}
      />
      <Route
        path="/beers/:id"
        render={(props) => (
          <BeerCard {...props} beers={beers} likeHandler={likeHandler} />
        )}
      />
      <Route
        path="/add_new_beer"
        render={(props) => (
          <AddNewBeer
            {...props}
            beers={beers}
            inputChangeHandler={inputChangeHandler}
            newBeerName={newBeerName}
            addNewBeer={addNewBeer}
            newBeerLikes={newBeerLikes}
          />
        )}
      />
    </Grid>
  );
}

export default withStyles(styles)(App);
