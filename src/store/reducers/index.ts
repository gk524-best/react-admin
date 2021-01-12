import { combineReducers } from 'redux';
import themeReducer, { ThemeStateType } from './themeReducer';
import authReducer, { AuthStateType } from './authReducer';

export type ReduxStateType = {
  authReducer: AuthStateType;
  themeReducer: ThemeStateType;
};

export const rootReducer = combineReducers({
  themeReducer,
  authReducer,
});
