import { createMuiTheme, Theme } from '@material-ui/core/styles';
import breakpoints from './breakpoints';
import overrides from './overrides';
import props from './props';

const createTheme = (name: string): Theme => {
  return createMuiTheme({
    spacing: 4,
    breakpoints: breakpoints,
    overrides: overrides,
    props: props,
    
  });
};

export default createTheme;
