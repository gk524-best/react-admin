import React, { ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';
import { Helmet } from 'react-helmet';
import { withWidth } from '@material-ui/core';
import { isWidthUp } from '@material-ui/core/withWidth';
import styled from 'styled-components';

interface IProps {
  breadcrumb?: boolean;
  title?: string;
  children?: any;
}

const Main = styled.main`
  margin: 24px;
`;

const PageHead = styled.div`
  background: #fff;
  margin: -24px -24px 0 -24px;
  padding: 16px 24px;
`;

const PageHeadTitle = styled.div`
  margin-top: 8px;

  & .title {
    margin: 4px 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    display: inline-block;
  }
`;

const PageContent = styled.div`
  width: 100%;
  & .main-layout {
    position: relative;
    margin-top: 24px;
  }
`;

const PageWrapper: React.FC<IProps> = ({
  breadcrumb = false,
  title = '',
  children,
}) => {
  return (
    <React.Fragment>
      {title && <Helmet title={title} />}
      <Main>
        {breadcrumb && (
          <PageHead>
            <Breadcrumbs />
            <PageHeadTitle>
              <span className="title">{title}</span>
            </PageHeadTitle>
          </PageHead>
        )}
        <PageContent>
          <div className="main-layout">{children}</div>
        </PageContent>
      </Main>
    </React.Fragment>
  );
};

export default withWidth()(PageWrapper);
