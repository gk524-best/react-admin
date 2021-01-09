import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
  },
});

const Loading = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ position: 'fixed' }}>
      <CircularProgress color="secondary" className={classes.root} />
    </div>
  );
};

export default Loading;
