import React from 'react';
import async from 'components/Async1';
import { RoutesType } from './index';

const Home = async(() => import('../pages/home'));
const Login = async(() => import('../pages/Login'));
const MallCategory = async(() => import('../pages/mall/category/index'));

// 用户管理
const User = async(() => import('../pages/users/index'));

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

// 账号管理
const userRoutes: RoutesType = {
  name: '账号管理',
  path: '/user',
  children: [
    {
      path: '/user/list',
      name: '账号列表',
      Component: User
    }
  ]
}

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

export const sidebarRoutes: Array<RoutesType> = [pagesRoutes, productRoutes, userRoutes];

export const authRoutes = [LoginRoutes];
