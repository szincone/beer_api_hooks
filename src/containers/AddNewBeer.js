import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  FormGroup,
  Grid,
  Input,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = (theme) => ({
  title: {
    color: theme.palette.secondary.main,
    marginBottom: '.5rem',
  },
  inputText: {
    margin: 0,
    color: theme.palette.secondary.main,
  },
  centerGrid: {
    textAlign: 'center',
  },
  buttonStyle: {
    background: theme.palette.primary.contrastText,
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    border: 'none',
    borderRadius: '0 0 4px 4px',
    borderTop: `2px solid ${theme.palette.secondary.main}`,
    cursor: 'pointer',
    padding: '.25rem .75rem',
    margin: '0 auto',
    minWidth: '330px',
    '&:hover': {
      color: theme.palette.secondary.main,
      background: theme.palette.primary.contrastTextLight,
    },
  },
  homeButtonStyle: {
    background: theme.palette.secondary.main,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '.25rem .75rem',
    margin: '0 auto',
    minWidth: '330px',
    width: '100%',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  inputStyle: {
    background: theme.palette.secondary.main,
    borderRadius: '4px',
  },
  linkDec: {
    textDecoration: 'none',
  },
  formGroup: {
    textAlign: 'center',
    marginBottom: '1rem',
    background: theme.palette.secondary.contrastText,
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '340px',
  },
});

function AddNewBeer(props) {
  const { classes } = props;
  return (
    <>
      <Typography variant="h4" className={classes.title}>
        Add New Beer
      </Typography>
      <FormGroup className={classes.formGroup}>
        <Grid className={classes.centerGrid}>
          <Typography variant="h5" className={classes.inputText}>
            Name
          </Typography>
          <Input
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
          <Input
            onChange={props.inputChangeHandler}
            name="likes"
            placeholder="New Beer Likes..."
            value={props.newBeerLikes}
            className={classes.inputStyle}
          />
        </Grid>
        <Button
          className={classes.buttonStyle}
          onClick={props.addNewBeer}
          style={{ padding: '.5rem' }}
        >
          Submit
        </Button>
      </FormGroup>
      <Link to="/" className={classes.linkDec}>
        <Button className={classes.homeButtonStyle}>Home</Button>
      </Link>
    </>
  );
}

export default withStyles(styles)(AddNewBeer);
