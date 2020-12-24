// 屏幕分辨率
import {
  Breakpoints
} from '@material-ui/core/styles/createBreakpoints';

type BreakpointsType = Partial<Breakpoints>

const breakpoints: BreakpointsType = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1440,
  }
};

export default breakpoints
