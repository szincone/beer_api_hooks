import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import BeerCard from './containers/BeerCard';
import AllBeers from './containers/AllBeers';

export default function App() {
  const [beers, setBeers] = useState([]);

  const fetchBeers = async () => {
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer',
    );
    console.log('RES DATA', response);
    setBeers(response.data);
  };

  // this useEffect hook acts like componentDidMount,
  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div style={{ maxWidth: '800px', width: '100%' }}>
      <Route
        exact
        path="/"
        render={(props) => <AllBeers {...props} beers={beers} />}
      />
      <Route
        path="/beers/:id"
        render={(props) => <BeerCard {...props} beers={beers} />}
      />
    </div>
  );
}
