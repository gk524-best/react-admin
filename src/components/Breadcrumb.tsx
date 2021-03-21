import React from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
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

let index = 0;
const breadcrumbs: Array<BreadcrumbItemType> = new Array();
function generateRouteNames(routes: Array<RoutesType>, paths: Array<string>) {
  routes.forEach((item) => {
    if (item.path === paths[index]) {
      breadcrumbs[index] = {
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

const Breadcrumb: React.FC<{}> = () => {
  const location = useLocation();
  const paths: Array<string> = generatePaths(location.pathname);
  generateRouteNames(routes, paths);
  breadcrumbs.unshift({ name: '首页', path: '/' });
  console.log(breadcrumbs);

  return (
    <Breadcrumbs aria-label="breadcrumb">
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
    </Breadcrumbs>
  );
};

export default Breadcrumb;
