import React from 'react';
import styled from 'styled-components';

import {
  AppBar as MuiAppBar,
  Hidden,
  Grid,
  Toolbar,
  IconButton as MuiIconButton,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import UserDropdown from './UserDropdown';

const IconButton = styled(MuiIconButton)`
  svg: {
    width: 22px;
    height: 22px;
  }
`;

type HeaderType = {
  onDrawerToggle:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
};

const HeaderComponent = ({ onDrawerToggle }: HeaderType) => (
  <React.Fragment>
    <MuiAppBar position="sticky">
      <Toolbar>
        <Grid container alignItems="center">
          <Hidden mdUp>
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={onDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item xs />
          <Grid item>
            <UserDropdown />
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  </React.Fragment>
);

export default HeaderComponent;
