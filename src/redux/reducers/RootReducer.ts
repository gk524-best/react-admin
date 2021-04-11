import { combineReducers } from 'redux';
import ThemeReducer, { ThemeStateType } from './ThemeReducer';
import AuthReducer, { AuthStateType } from './AuthReducer';
import SignInReducer, { SignInStateType } from './SignInReducer';

export type ReduxStateType = {
  auth: AuthStateType;
  theme: ThemeStateType;
  signIn: SignInStateType
};

const RootReducer = combineReducers({
  theme: ThemeReducer,
  auth: AuthReducer,
  signIn: SignInReducer
});

export default RootReducer;
