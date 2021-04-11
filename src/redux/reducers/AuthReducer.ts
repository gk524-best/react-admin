import * as types from 'constants/app';
import { AnyAction } from 'redux';

export type AuthStateType = {
  isLogin: boolean;
};

const initialAuthState = {
  isLogin: true,
};

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
