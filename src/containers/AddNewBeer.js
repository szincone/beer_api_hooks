import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  title: {
    color: 'white',
    marginBottom: '.5rem',
  },
  inputText: {
    margin: 0,
    color: 'white',
  },
  centerGrid: {
    textAlign: 'center',
  },
  buttonStyle: {
    background: '#FDE74C',
    fontWeight: 'bold',
    color: '#4C5B5C',
    border: '2px solid white',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '.25rem .75rem',
    margin: '0 auto',
    width: '65px',
  },
  inputStyle: {
    background: '#ffffff',
    borderRadius: '4px',
  },
  formGroup: {
    textAlign: 'center',
    marginBottom: '1rem',
    background: '#DB5461',
    border: '2px solid white',
    borderRadius: '4px',
    width: '300px',
    height: '14rem',
    display: 'flex',
    padding: '1rem',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

function AddNewBeer(props) {
  const { classes } = props;
  return (
    <>
      <Typography variant="h3" className={classes.title}>
        Add New Form
      </Typography>
      <form onSubmit={props.addNewBeer} className={classes.formGroup}>
        <Grid className={classes.centerGrid}>
          <Typography variant="h5" className={classes.inputText}>
            Name
          </Typography>
          <input
            onChange={props.inputChangeHandler}
            name="name"
            placeholder="New Beer Name..."
            value={props.newBeerName}
            className={classes.inputStyle}
          />
        </Grid>
        <Grid className={classes.centerGrid}>
          <Typography variant="h5" className={classes.inputText}>
            Likes
          </Typography>
          <input
            onChange={props.inputChangeHandler}
            name="likes"
            placeholder="New Beer Likes..."
            value={props.newBeerLikes}
            className={classes.inputStyle}
          />
        </Grid>
        <button className={classes.buttonStyle} style={{ padding: '.5rem' }}>
          Submit
        </button>
      </form>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button className={classes.buttonStyle}>Home</Button>
      </Link>
    </>
  );
}

export default withStyles(styles)(AddNewBeer);
