import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  title: {
    color: theme.palette.secondary.main,
    marginBottom: '.75rem',
    textAlign: 'center',
  },
  addNewButton: {
    background: theme.palette.secondary.main,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '.25rem .5rem',
    marginBottom: '.5rem',
    border: `2px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  singleCard: {
    background: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    margin: '.5rem',
    textAlign: 'center',
    padding: '.5rem',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '150px',
    minWidth: '240px',
    maxWidth: '241px',
    '&:hover': {
      background: theme.palette.secondary.contrastTextLight,
    },
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardText: {
    color: theme.palette.secondary.main,
  },
});

function AllBeers(props) {
  const { classes } = props;
  return (
    <>
      <Typography variant="h3" className={classes.title}>
        World of Beer{' '}
        <span role="img" aria-label="beer">
          🍺
        </span>
      </Typography>
      <Link to="/add_new_beer" style={{ textDecoration: 'none' }}>
        <Button value="addNew" className={classes.addNewButton}>
          Add New Beer
        </Button>
      </Link>
      <Grid className={classes.cardContainer}>
        {props.beers
          .filter((beer) => beer.name !== '')
          .map((beer) => (
            <Link
              to={`/beers/${beer.id}`}
              style={{ textDecoration: 'none', color: 'black' }}
              key={beer.id}
            >
              <Grid className={classes.singleCard}>
                <Typography variant="h6" className={classes.cardText}>
                  {beer.name.length > 10
                    ? beer.name.substring(0, 9) + '...'
                    : beer.name}
                </Typography>
                <Typography variant="h6" className={classes.cardText}>
                  <span style={{ fontStyle: 'italic' }}>likes: </span>
                  {beer.likes}
                </Typography>
              </Grid>
            </Link>
          ))}
      </Grid>
    </>
  );
}

export default withStyles(styles)(AllBeers);
