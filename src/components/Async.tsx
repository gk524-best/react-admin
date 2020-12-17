import React from 'react';
import loadable from '@loadable/component';
import Loading from 'components/Loading';

const asyncComponent = (importComponent: any) => {
  console.log(importComponent);

  return loadable(importComponent, {
    fallback: <Loading />,
  });
};

export default asyncComponent;
