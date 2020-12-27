import { combineReducers } from "redux";
import * as types from 'constants/app';
import { APP_THEMES, ThemesType } from 'constants/app';
import { AnyAction } from 'redux';

export type InitialStateType = {
  currentTheme: string
}

const initialState = {
  currentTheme: APP_THEMES.DEFAULT
}

const setTheme = (state = initialState, actions: AnyAction) => {
  switch (actions.type) {
    case types.APP_THEME_SET:
      return {
        ...state,
        currentTheme: actions.payload
      }
  }
}

export default combineReducers({
  setTheme
})
