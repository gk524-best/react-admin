import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
`;

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
    <Div>
      <CircularProgress color="secondary" className={classes.root} />
    </Div>
  );
};

export default Loading;
