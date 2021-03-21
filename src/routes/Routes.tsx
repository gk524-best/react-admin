import React from 'react';
import async from 'components/Async1';
import { RoutesType } from './index';

const Home = async(() => import('../pages/home'));
const Login = async(() => import('../pages/Login'));
const MallCategory = async(() => import('../pages/mall/category/index'));

const HomeRoutes = {};

const LoginRoutes: RoutesType = {
  name: 'Auth',
  path: '/auth',
  header: 'Home',
  children: [
    {
      path: '/auth/sign-in',
      name: '登录',
      Component: Login,
    },
  ],
};

const pagesRoutes: RoutesType = {
  name: 'Pages',
  path: '/pages',
  children: [
    {
      path: '/pages/home',
      name: '首页',
      Component: Home,
    },
  ],
};

// 商品
const productRoutes: RoutesType = {
  name: '商品管理',
  path: '/mall',
  children: [
    {
      path: '/mall/product',
      name: '商品分类',
      Component: MallCategory,
    },
  ],
};

export const sidebarRoutes: Array<RoutesType> = [pagesRoutes, productRoutes];

export const authRoutes = [LoginRoutes];
