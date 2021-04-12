import * as types from 'constants/app';
import { AnyAction } from 'redux';

const initialAuthState = {
  isLogin: true,
};

export type AuthState = Readonly<typeof initialAuthState>;

export default (state = initialAuthState, action: AnyAction) => {
  switch (action.type) {
    case types.SET_LOGIN_STATE:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};
