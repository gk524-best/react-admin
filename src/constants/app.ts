/**
 * 命名规则
 * 文件名_自定义名
 * 防止项目复杂以后action命名冲突所以
 * 文件命名最好规范化
 */
export const APP_THEME_SET = 'APP_THEME_SET';

type ThemeType = 'DEFAULT' | 'DARK' | 'LIGHT' | 'BLUE' | 'INDIGO' | 'GREEN';

export type ThemesType = Record<ThemeType, string>;

export const APP_THEMES: ThemesType = {
  DEFAULT: 'DEFAULT',
  DARK: 'DARK',
  LIGHT: 'LIGHT',
  BLUE: 'BLUE',
  INDIGO: 'INDIGO',
  GREEN: 'GREEN',
};

export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';
