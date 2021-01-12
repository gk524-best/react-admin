import { combineReducers } from 'redux';
import * as types from 'constants/app';
import { APP_THEMES, ThemesType } from 'constants/app';
import { AnyAction } from 'redux';

export type ThemeStateType = {
  currentTheme: string;
};

const initialState = {
  currentTheme: APP_THEMES.DEFAULT,
};

export default (state = initialState, actions: AnyAction) => {
  switch (actions.type) {
    case types.APP_THEME_SET:
      return {
        ...state,
        currentTheme: actions.payload,
      };
    default:
      return state;
  }
};
