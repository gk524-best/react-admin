import React, { ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';
import { Helmet } from 'react-helmet';
import { Grid } from '@material-ui/core';

interface IProps {
  breadcrumb?: boolean;
  title?: string;
  children?: any,
}

const PageWrapper: React.FC<IProps> = ({ breadcrumb = false, title = '', children }) => {
  return (
    <React.Fragment>
      { title && <Helmet title={title}/> }
      { breadcrumb && <Breadcrumbs/> }
      <Grid container>
        {children}
      </Grid>
    
    </React.Fragment>
  )
};

export default PageWrapper;
