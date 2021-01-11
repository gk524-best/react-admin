import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Hidden, Paper as MuiPaper } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { isWidthUp } from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { RoutesType } from '@/routes';

const drawerWidth = 258;

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: ${(props: any) => {
      return props.theme.palette.background.default;
    }};
  }

  .MuiCardHeader-action .MuiIconButton-root {
    padding: 4px;
    width: 28px;
    height: 28px;
  }
`;

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

const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }
`;

type LayoutType = {
  children: any;
  routes: RoutesType[];
  width: Breakpoint;
};

const Layout = ({ children, routes, width }: LayoutType) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Root>
        <Drawer>
          <Hidden mdUp implementation="js">
            <Sidebar
              routes={routes}
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden smDown implementation="css">
            <Sidebar
              routes={routes}
              PaperProps={{ style: { width: drawerWidth } }}
            />
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
    </React.Fragment>
  );
};

export default Layout;
