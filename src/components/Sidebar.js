import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba, darken } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { NavLink, withRouter } from 'react-router-dom';

import {
  Box,
  Drawer as MuiDrawer,
  List as MuiList,
  ListItem as MuiListItem,
  ListItemText,
  Collapse,
  Typography,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const Scrollbar = styled(PerfectScrollbar)`
  background-color: ${(props) => props.theme.sidebar.background};
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  height: 100%;
`;

const List = styled(MuiList)`
  background-color: ${(props) => props.theme.sidebar.background};
`;

const Link = styled(MuiListItem)`
  padding-left: ${(props) => props.theme.spacing(15)}px;
  padding-top: ${(props) => props.theme.spacing(2)}px;
  padding-bottom: ${(props) => props.theme.spacing(2)}px;

  span {
    color: ${(props) => rgba(props.theme.sidebar.color, 0.7)};
  }

  &:hover span {
    color: ${(props) => rgba(props.theme.sidebar.color, 0.9)};
  }

  &:hover {
    background-color: ${(props) =>
      darken(0.015, props.theme.sidebar.background)};
  }

  &.${(props) => props.activeClassName} {
    background-color: ${(props) =>
      darken(0.03, props.theme.sidebar.background)};

    span {
      color: ${(props) => props.theme.sidebar.color};
    }
  }
`;

const Brand = styled(MuiListItem)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) => props.theme.sidebar.header.color};
  background-color: ${(props) => props.theme.sidebar.header.background};
  font-family: ${(props) => props.theme.typography.fontFamily};
  min-height: 56px;
  padding-left: ${(props) => props.theme.spacing(6)}px;
  padding-right: ${(props) => props.theme.spacing(6)}px;
  justify-content: center;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.up('sm')} {
    min-height: 64px;
  }

  &:hover {
    background-color: ${(props) => props.theme.sidebar.header.background};
  }
`;

const Drawer = styled(MuiDrawer)``;

const ListWrapper = styled.div`
  padding-top: ${(props) => props.theme.spacing(2.5)}px;
  padding-bottom: ${(props) => props.theme.spacing(2.5)}px;
`;

const LinkText = styled(ListItemText)`
  color: ${(props) => props.theme.sidebar.color};
  span {
    font-size: ${(props) => props.theme.typography.fontWeightBlod};
  },
  margin-top: 0;
  margin-bottom: 0;
`;

const Category = styled(MuiListItem)`
  padding-top: ${(props) => props.theme.spacing(3)}px;
  padding-bottom: ${(props) => props.theme.spacing(3)}px;
  padding-left: ${(props) => props.theme.spacing(8)}px;
  padding-right: ${(props) => props.theme.spacing(7)}px;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};

  svg {
    color: ${(props) => props.theme.sidebar.color};
    font-size: 20px;
    width: 20px;
    height: 20px;
    opacity: 0.5;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  &.${(props) => props.activeClassName} {
    background-color: ${(props) =>
      darken(0.03, props.theme.sidebar.background)};

    span {
      color: ${(props) => props.theme.sidebar.color};
    }
  }
`;

const CategoryText = styled(ListItemText)`
  margin: 0;
  span {
    color: ${(props) => props.theme.sidebar.color};
    font-size: ${(props) => props.theme.typography.body1.fontSize}px;
    padding: 0 ${(props) => props.theme.spacing(4)}px;
  }
`;

const CategoryIconLess = styled(ExpandLess)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const CategoryIconMore = styled(ExpandMore)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const SidebarSection = styled(Typography)`
  color: ${(props) => props.theme.sidebar.color};
  padding: ${(props) => props.theme.spacing(4)}px
    ${(props) => props.theme.spacing(7)}px
    ${(props) => props.theme.spacing(1)}px;
  opacity: 0.9;
  display: block;
`;

const SidebarCategory = ({
  name,
  icon,
  classes,
  isOpen,
  isCollapsable,
  ...rest
}) => {
  return (
    <Category {...rest}>
      {icon}
      <CategoryText>{name}</CategoryText>
      {isCollapsable ? (
        isOpen ? (
          <CategoryIconMore />
        ) : (
          <CategoryIconLess />
        )
      ) : null}
    </Category>
  );
};

const SidebarLink = ({ name, to, icon }) => {
  return (
    <Link
      button
      dense
      component={NavLink}
      exact
      to={to}
      activeClassName="active">
      <LinkText>{name}</LinkText>
    </Link>
  );
};

const Sidebar = ({ routes, classes, staticContext, location, ...rest }) => {
  const initOpenRoutes = () => {
    /* Open collapse element that matches current url */
    const pathName = location.pathname;

    let _routes = {};

    console.log(location, staticContext);

    console.log(routes);

    routes.forEach((route, index) => {
      const isActive = pathName.indexOf(route.path) === 0;
      const isOpen = route.open;
      const isHome = route.containsHome && pathName === '/';

      _routes = Object.assign({}, _routes, {
        [index]: isActive || isOpen || isHome,
      });
    });

    return _routes;
  };

  const [openRoutes, setOpenRoutes] = useState(() => initOpenRoutes());

  const toggle = (index) => {
    // Collapse all elements
    Object.keys(openRoutes).forEach(
      (item) =>
        openRoutes[index] ||
        setOpenRoutes((openRoutes) =>
          Object.assign({}, openRoutes, { [item]: false }),
        ),
    );

    // Toggle selected element
    setOpenRoutes((openRoutes) =>
      Object.assign({}, openRoutes, { [index]: !openRoutes[index] }),
    );
  };
  return (
    <Drawer variant="permanent" {...rest}>
      <Brand button component={NavLink} to="/">
        <Box ml={1}> Material App </Box>
      </Brand>
      <Scrollbar>
        <List disablePadding>
          <ListWrapper>
            {routes.map((category, index) => (
              <React.Fragment key={index}>
                {category.header ? (
                  <SidebarSection>{category.header}</SidebarSection>
                ) : null}
                {category.children ? (
                  <React.Fragment key={index}>
                    <SidebarCategory
                      isOpen={!openRoutes[index]}
                      isCollapsable={true}
                      name={category.id}
                      button={true}
                      onClick={() => toggle(index)}
                      icon={category.icon}
                    />
                    <Collapse
                      in={Boolean(openRoutes[index])}
                      timeout="auto"
                      unmountOnExit>
                      {category.children.map((route, index) => (
                        <SidebarLink
                          key={index}
                          name={route.name}
                          to={route.path}
                          icon={route.icon}
                        />
                      ))}
                    </Collapse>
                  </React.Fragment>
                ) : category.icon ? (
                  <SidebarCategory
                    isCollapsable={false}
                    name={category.id}
                    to={category.path}
                    activeClassName="active"
                    component={NavLink}
                    icon={category.icon}
                    exact
                    button
                  />
                ) : null}
              </React.Fragment>
            ))}
          </ListWrapper>
        </List>
      </Scrollbar>
    </Drawer>
  );
};

export default withRouter(Sidebar);
