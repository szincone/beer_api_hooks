import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

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
  dialogTitle: {
    background: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    fontSize: '1.75rem',
    fontWeight: 'bold',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderBottom: 'none',
  },
  dialogActions: {
    background: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '1.75rem',
    fontWeight: 'bold',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderTop: 'none',
  },
  cancelDialogButton: {
    background: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
    fontWeight: 'bold',
    '&:hover': {
      background: theme.palette.secondary.contrastTextLight,
      color: theme.palette.secondary.main,
    },
  },
  deleteDialogButton: {
    marginLeft: '5px',
    background: theme.palette.primary.contrastText,
    border: `2px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.textColor,
    fontWeight: 'bold',
    '&:hover': {
      background: theme.palette.primary.contrastTextLight,
      color: theme.palette.secondary.main,
    },
  },
});

function AllBeers(props) {
  const { classes } = props;
  const [dialogBool, setDialogBool] = useState(false);
  const handleDialog = () => {
    setDialogBool(!dialogBool);
  };
  return (
    <>
      {/* delete modal */}
      <Dialog
        open={dialogBool}
        onClose={handleDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className={classes.dialogTitle}>
          Are you sure you want to delete the beer?
        </DialogContent>
        {/* <DialogContent className={classes.dialogTextContainer}>
          <DialogContentText className={classes.dialogText}>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogContent className={classes.dialogActions}>
          <Button
            onClick={handleDialog}
            className={classes.cancelDialogButton}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDialog}
            className={classes.deleteDialogButton}
            autoFocus
          >
            Delete
          </Button>
        </DialogContent>
      </Dialog>
      {/* end delete modal */}
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
              <Button className={classes.deleteButton} onClick={handleDialog}>
                Delete
              </Button>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default withStyles(styles)(AllBeers);
