import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  cardText: {
    color: '#ffffff',
    padding: '.5rem',
  },
  cardTitle: {
    color: '#ffffff',
    padding: '.5rem',
    fontWeight: 'bold',
  },
  singleCardContainer: {
    background: '#DB5461',
    color: 'white',
    margin: '1rem',
    textAlign: 'center',
    border: '2px solid white',
    borderRadius: '4px',
  },
  buttonStyles: {
    background: '#3891A6',
    border: '2px solid white',
    fontWeight: 'bold',
    color: 'white',
    minHeight: '4rem',
    minWidth: '330px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: 0,
    padding: '2px',
  },
  operationButtons: {
    background: '#FDE74C',
    border: '2px solid white',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: '2rem',
    minHeight: '4rem',
    width: '4rem',
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
      <Typography variant="h5" className={classes.cardTitle}>
        {beer.name}
      </Typography>
      <Typography variant="h5" className={classes.cardText}>
        Current likes: {beer.likes}
      </Typography>
      <Grid>
        <Button
          onClick={(event) => props.likeHandler(event, beer)}
          value="increase"
          className={classes.operationButtons}
        >
          +
        </Button>
        <Button
          onClick={(event) => props.likeHandler(event, beer)}
          value="decrease"
          className={classes.operationButtons}
        >
          -
        </Button>
      </Grid>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button className={classes.buttonStyles}>Home</Button>
      </Link>
    </Grid>
  );
}

export default withStyles(styles)(BeerCard);
