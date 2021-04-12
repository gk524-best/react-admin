import { combineReducers } from 'redux';
import ThemeReducer, { ThemeState } from './ThemeReducer';
import AuthReducer, { AuthState } from './AuthReducer';
import SignInReducer, { SignInState } from './SignInReducer';

export type RootState = {
  auth: AuthState;
  theme: ThemeState;
  signIn: SignInState
};

const RootReducer = combineReducers({
  theme: ThemeReducer,
  auth: AuthReducer,
  signIn: SignInReducer
});

export default RootReducer;
