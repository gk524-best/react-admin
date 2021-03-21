import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Layout from '@/layouts';
import AuthLayout from '@/layouts/auth';
import { sidebarRoutes, authRoutes } from './Routes';
import { connect } from 'react-redux';
import { ReduxStateType } from 'store/reducers/index';

import async from 'components/Async1';

const Page404 = async(() => import('../pages/auth/Page404'));
const Login = async(() => import('../pages/Login'));

export type RoutesType = {
  name: string;
  path: string;
  Component?: React.ElementType | null;
  icon?: React.ElementType;
  header?: string;
  containsHome?: boolean;
  children?: RoutesType[] | null;
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

type RoutesProps = {
  isLogin?: boolean;
};

const Routes = (props: RoutesProps) => {
  const { isLogin } = props;
  return (
    <Router>
      <Switch>
        {childrenRoutes(AuthLayout, authRoutes)}
        {isLogin ? (
          childrenRoutes(Layout, sidebarRoutes)
        ) : (
          <Redirect
            to={{
              pathname: '/auth/sign-in',
            }}
          />
        )}
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
};

const mapStateToProps = (state: ReduxStateType) => {
  return {
    isLogin: state.authReducer.isLogin,
  };
};

export default connect(mapStateToProps, null)(Routes);
