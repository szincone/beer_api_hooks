import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  title: {
    color: 'white',
    marginBottom: '.5rem',
  },
  addNewButton: {
    background: '#DB5461',
    fontWeight: 'bold',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '.25rem .5rem',
    border: '2px solid white',
  },
  singleCard: {
    background: '#DB5461',
    color: 'white',
    margin: '1rem',
    textAlign: 'center',
    padding: '.5rem',
    border: '2px solid white',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '150px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  cardText: {
    color: 'white',
    // marginBottom: 0,
  },
});

function AllBeers(props) {
  const { classes } = props;
  return (
    <>
      <Typography variant="h2" className={classes.title}>
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
                <Typography variant="h4" className={classes.cardText}>
                  {beer.name.length > 10
                    ? beer.name.substring(0, 10) + '...'
                    : beer.name}
                </Typography>
                <Typography variant="h4" className={classes.cardText}>
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
