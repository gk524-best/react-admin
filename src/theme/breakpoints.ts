import {
  Breakpoints,
  Breakpoint,
} from '@material-ui/core/styles/createBreakpoints';

const breakpoints: Breakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1440,
  },
  up: (key: Breakpoint | number) => '',
  down: (key: Breakpoint | number) => '',
  between: (start: Breakpoint | number, end: Breakpoint | number) => '',
  only: (key: Breakpoint) => '',
  width: (key: Breakpoint) => 0,
};

export default breakpoints;
