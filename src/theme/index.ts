import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { zhCN } from '@material-ui/core/locale';
import breakpoints from './breakpoints';
import overrides from './overrides';
import props from './props';
import typography from './typography';
// 主题色
import variants from './variants';
import shadows from './shadows';

const createTheme = (name: string): Theme => {
  let themeConfig = variants.find((variant) => variant.name === name);

  if (!themeConfig) {
    console.warn(new Error(`The theme ${name} is not valid`));
    themeConfig = variants[0];
  }

  return createMuiTheme(
    {
      spacing: 4,
      breakpoints: breakpoints,
      overrides: overrides,
      props: props,
      typography: typography,
      shadows: shadows,
    },
    {
      name: themeConfig.name,
      header: themeConfig.header,
      footer: themeConfig.footer,
      sidebar: themeConfig.sidebar,
      palette: themeConfig.palette,
    },
    zhCN,
  );
};

export default createTheme;
