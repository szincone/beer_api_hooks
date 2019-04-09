import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  cardText: {
    color: theme.palette.secondary.main,
    padding: '.5rem',
  },
  cardTitle: {
    color: theme.palette.secondary.main,
    padding: '.5rem',
    fontWeight: 'bold',
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  singleCardContainer: {
    background: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    margin: '1rem',
    textAlign: 'center',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '4px',
  },
  buttonStyles: {
    background: theme.palette.secondary.main,
    borderRadius: '0 0 4px 4px',
    borderTop: `2px solid ${theme.palette.secondary.main}`,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    minHeight: '4rem',
    minWidth: '330px',
    cursor: 'pointer',
    marginTop: 0,
    padding: '2px',
    '&:hover': {
      color: theme.palette.secondary.main,
      background: theme.palette.primary.main,
    },
  },
  operationButtons: {
    background: theme.palette.primary.contrastText,
    border: `2px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    fontSize: '2rem',
    height: '4.5rem',
    width: '5.5rem',
    borderRadius: '4px',
    margin: '1rem',
    cursor: 'pointer',
    marginTop: 0,
    '&:hover': {
      color: theme.palette.primary.contrastText,
      background: theme.palette.secondary.main,
      border: `2px solid ${theme.palette.primary.contrastText}`,
    },
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
