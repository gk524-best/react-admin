import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '@/layouts';
import { sidebarRoutes } from './Routes';

export type RoutesType = {
  id: string;
  path: string;
  Component?: React.ElementType | null;
  icon?: React.ElementType;
  header?: string;
  containsHome?: boolean;
  children?: RouteItemType[] | null;
};

export type RouteItemType = {
  path: string;
  name: string;
  Component: React.ElementType;
};

const childrenRoutes = (Layout: any, routes: RoutesType[]) =>
  routes.map((item, index) => {
    const { path, Component, children } = item;
    return children ? (
      children.map((element, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={(props) => (
            <Layout>
              <element.Component {...props} />
            </Layout>
          )}
        />
      ))
    ) : Component ? (
      <Route
        key={index}
        path={path}
        exact
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    ) : null;
  });

console.log(childrenRoutes(Layout, sidebarRoutes));

const Routes = () => (
  <Router>
    <Switch>{childrenRoutes(Layout, sidebarRoutes)}</Switch>
  </Router>
);

export default Routes;
