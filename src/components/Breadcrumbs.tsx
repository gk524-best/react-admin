import React, { useState, useEffect } from 'react';
import { Breadcrumbs as Bread, Link, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { sidebarRoutes as routes } from 'routes/Routes';
import { RoutesType } from 'routes/index';

type BreadcrumbItemType = {
  name: string;
  path: string;
};

/**
 * 生成路径名称
 * 输入： "/pages/home/sss/cc"
 * 输出： ["/pages", "/pages/home", "/pages/home/sss", "/pages/home/sss/cc"]
 * @param pathname
 */
const generatePaths = (pathname: string): Array<string> => {
  const len = pathname.length;
  const ids: Array<number> = [];
  for (let i = 1; i < len; i++) {
    if (pathname[i] === '/') {
      ids.push(i);
    }
  }
  ids.push(len);
  const paths: Array<string> = ids.reduce((pre: Array<string>, cur: number) => {
    const route = pathname.slice(0, cur);
    pre.push(route);
    return pre;
  }, []);
  return paths;
};

/**
 * 根据路径匹配组成对应的路径名称
 */
let index = 0;
const temp: Array<BreadcrumbItemType> = new Array();
function generateRouteNames(routes: Array<RoutesType>, paths: Array<string>) {
  routes.forEach((item) => {
    if (item.path === paths[index]) {
      temp[index] = {
        name: item.name,
        path: item.path,
      };
      if (item.children) {
        index++;
        generateRouteNames(item.children, paths);
      }
    }
  });
}

const Breadcrumbs: React.FC<{}> = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<Array<BreadcrumbItemType>>([]);
  const location = useLocation();

  useEffect(() => {
    const paths: Array<string> = generatePaths(location.pathname);
    generateRouteNames(routes, paths);
    const home = [{ name: '首页', path: '/' }];
    const b = home.concat(temp);
    setBreadcrumbs(b)
  }, [])

  return (
    <Bread aria-label="breadcrumb">
      {breadcrumbs.map((item, index) => {
        if (index === 0) {
          return (
            <Link key={item.path} color="inherit" href={item.path}>
              {item.name}
            </Link>
          );
        } else {
          if (index == breadcrumbs.length - 1) {
            return (
              <Typography key={item.path} color="textPrimary">
                {item.name}
              </Typography>
            );
          } else {
            return (
              <Typography key={item.path} color="inherit">
                {item.name}
              </Typography>
            );
          }
        }
      })}
    </Bread>
  );
};

export default Breadcrumbs;
