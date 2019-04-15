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
  singleCardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  singleCard: {
    background: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    margin: '.5rem',
    textAlign: 'center',
    padding: '.5rem',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '4px 4px 0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '150px',
    minWidth: '240px',
    maxWidth: '241px',
    // connects delete w/ main card
    marginBottom: '0',
    borderBottom: 'none',
    '&:hover': {
      background: theme.palette.secondary.contrastTextLight,
    },
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  deleteButton: {
    background: theme.palette.primary.contrastText,
    marginBottom: '.5rem',
    fontWeight: 'bold',
    fontSize: '1rem',
    minWidth: '240px',
    maxWidth: '241px',
    borderRadius: '0 0 4px 4px',
    border: `2px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      background: theme.palette.primary.contrastTextLight,
      color: theme.palette.secondary.main,
    },
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
            <Grid className={classes.singleCardWrapper}>
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
              <Button className={classes.deleteButton}>Delete</Button>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default withStyles(styles)(AllBeers);
