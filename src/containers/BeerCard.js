import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  cardText: {
    color: '#ffffff',
    padding: '.5rem',
  },
  singleCardContainer: {
    background: '#DB5461',
    color: 'white',
    margin: '1rem',
    textAlign: 'center',
    padding: '1rem',
    border: '2px solid white',
    borderRadius: '4px',
  },
  buttonStyles: {
    background: '#3891A6',
    border: '2px solid white',
    color: 'white',
    height: '2rem',
    width: '2rem',
    borderRadius: '4px',
    margin: '1rem',
    cursor: 'pointer',
    marginTop: 0,
    padding: '2px',
  },
  operationButtons: {
    background: '#FDE74C',
    border: '2px solid white',
    color: '#000000',
    height: '2rem',
    width: '2rem',
    borderRadius: '4px',
    margin: '1rem',
    cursor: 'pointer',
    marginTop: 0,
  },
});

function BeerCard(props) {
  const { classes } = props;
  const beer = props.beers.filter(
    (beer) => beer.id === parseInt(props.match.params.id, 10),
  )[0];
  return (
    <Grid className={classes.singleCardContainer}>
      <Typography variant="h4" className={classes.cardText}>
        {beer.name}
      </Typography>
      <Typography variant="h4" className={classes.cardText}>
        {beer.likes}
      </Typography>
      <Grid>
        <button
          onClick={(event) => props.likeHandler(event, beer)}
          value="increase"
          className={classes.operationButtons}
        >
          +
        </button>
        <button
          onClick={(event) => props.likeHandler(event, beer)}
          value="decrease"
          className={classes.operationButtons}
        >
          -
        </button>
      </Grid>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button className={classes.buttonStyles}>Home</Button>
      </Link>
    </Grid>
  );
}

export default withStyles(styles)(BeerCard);
