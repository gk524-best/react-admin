import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loading = (): JSX.Element => {
  return (
    <div className="loader">
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loading;
