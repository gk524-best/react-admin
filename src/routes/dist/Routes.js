"use strict";
exports.__esModule = true;
exports.authRoutes = exports.sidebarRoutes = void 0;
var Async1_1 = require("components/Async1");
var Home = Async1_1["default"](function () { return Promise.resolve().then(function () { return require('../pages/home'); }); });
var Login = Async1_1["default"](function () { return Promise.resolve().then(function () { return require('../pages/Login'); }); });
var MallCategory = Async1_1["default"](function () { return Promise.resolve().then(function () { return require('../pages/mall/category/index'); }); });
// 用户管理
var User = Async1_1["default"](function () { return Promise.resolve().then(function () { return require('../pages/users/index'); }); });
var My = Async1_1["default"](function () { return Promise.resolve().then(function () { return require('../pages/users/my'); }); });
var HomeRoutes = {};
var LoginRoutes = {
    name: 'Auth',
    path: '/auth',
    header: 'Home',
    children: [
        {
            path: '/auth/sign-in',
            name: '登录',
            Component: Login
        },
    ]
};
var pagesRoutes = {
    name: 'Pages',
    path: '/pages',
    children: [
        {
            path: '/pages/home',
            name: '首页',
            Component: Home
        },
    ]
};
// 账号管理
var userRoutes = {
    name: '账号管理',
    path: '/user',
    children: [
        {
            path: '/user/list',
            name: '账号列表',
            Component: User
        },
        {
            path: '/user/my',
            name: '个人中心',
            Component: My
        },
    ]
};
// 商品
var productRoutes = {
    name: '商品管理',
    path: '/mall',
    children: [
        {
            path: '/mall/product',
            name: '商品分类',
            Component: MallCategory
        },
    ]
};
exports.sidebarRoutes = [
    pagesRoutes,
    productRoutes,
    userRoutes,
];
exports.authRoutes = [LoginRoutes];
