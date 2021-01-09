import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from '@material-ui/core';
import { Power } from 'react-feather';

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

function UserDropdown() {
  const [auchorMenu, setAuchorMenu] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const linkToAccount = () => {};
  const handleSignOut = async () => {
    //   路由跳转
  };
  const toggleMenu = (event: any) => {
    setAuchorMenu(event.currentTarget);
  };
  const closeMenu = () => {
    setAuchorMenu(null);
  };
  return (
    <React.Fragment>
      <Tooltip title="个人中心">
        <IconButton
          aria-owns={Boolean(auchorMenu) ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit">
          <Power />
        </IconButton>
      </Tooltip>

      <Menu id="acount-menu" open={Boolean(auchorMenu)} onClose={closeMenu}>
        <MenuItem onClick={linkToAccount}>个人中心</MenuItem>
        <MenuItem onClick={handleSignOut}>退出登陆</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default UserDropdown;
