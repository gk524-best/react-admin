import React from 'react';
import async from 'components/Async1';

const Home = async(() => import('../pages/home'));
const Login = async(() => import('../pages/Login'));

const HomeRoutes = {};

const authRoutes = {
  id: 'Auth',
  path: '/auth',
  children: [
    {
      path: '/auth/sign-in',
      name: '登录',
      Component: Login,
    },
  ],
};

const pagesRoutes = {
  id: 'Pages',
  path: '/pages',
  children: [
    {
      path: '/pages/home',
      name: '首页',
      Component: Home,
    },
  ],
};

export const sidebarRoutes = [authRoutes, pagesRoutes];
