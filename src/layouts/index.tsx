import React, { useState } from 'react';
import styled from 'styled-components';

import { Hidden, Paper } from '@material-ui/core';
import { isWidthUp } from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Footer from 'components/Footer';

const drawerWidth = 258;

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;
const Drawer = styled.div`
  ${(props) => props.theme.breakpoints.up('md')} {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
`;

const AppContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

type LayoutType = {
  children: any;
  routes: any;
  width: Breakpoint;
};

const Layout = ({ children, routes, width }: LayoutType) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Root>
      <Drawer>
        <Hidden mdUp implementation="js">
          <Sidebar routes={routes} />
        </Hidden>
        <Hidden smDown implementation="css">
          <Sidebar routes={routes} />
        </Hidden>
      </Drawer>
      <AppContent>
        <Header onDrawerToggle={handleDrawerToggle} />
        <MainContent p={isWidthUp('lg', width) ? 12 : 5}>
          {children}
        </MainContent>
        <Footer />
      </AppContent>
    </Root>
  );
};
