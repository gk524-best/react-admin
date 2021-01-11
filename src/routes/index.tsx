import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '@/layouts';
import AuthLayout from '@/layouts/auth';
import { sidebarRoutes } from './Routes';

import async from 'components/Async1';

const Page404 = async(() => import('../pages/auth/Page404'));

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
          path={element.path}
          exact
          render={(props) => (
            <Layout routes={routes}>
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
          <Layout routes={routes}>
            <Component {...props} />
          </Layout>
        )}
      />
    ) : null;
  });

const Routes = () => (
  <Router>
    <Switch>
      {childrenRoutes(Layout, sidebarRoutes)}
      <Route
        render={() => (
          <AuthLayout>
            <Page404 />
          </AuthLayout>
        )}
      />
    </Switch>
  </Router>
);

export default Routes;
