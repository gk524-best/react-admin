import React, { ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';
import { Helmet } from 'react-helmet';
import { Grid, Paper, withWidth } from '@material-ui/core';
import { isWidthUp } from '@material-ui/core/withWidth';
import styled from 'styled-components';

interface IProps {
  breadcrumb?: boolean;
  title?: string;
  children?: any;
}

const PageHead = styled.div`
  background: #fff;
  margin: -24px -24px 0 -24px;
  padding: 16px 24px;
`;

const PageContent = styled(Paper)``;

const PageWrapper: React.FC<IProps> = ({
  breadcrumb = false,
  title = '',
  children,
}) => {
  return (
    <React.Fragment>
      {title && <Helmet title={title} />}
      {breadcrumb && (
        <PageHead>
          <Breadcrumbs />
        </PageHead>
      )}

      <PageContent>{children}</PageContent>
      {/* <Grid container>{children}</Grid> */}
    </React.Fragment>
  );
};

export default withWidth()(PageWrapper);
