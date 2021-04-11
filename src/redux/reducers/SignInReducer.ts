import {
  SIGNIN_SUCCESS,
  SIGNIN_LOADING,
  SIGNIN_ERROR,
} from '../actions/SignInActions';
import { AnyAction } from 'redux';

const initialState = {
  loading: false,
  success: false,
};

export type SignInStateType = Readonly<typeof initialState>;

const SingInReducer = function (
  state: SignInStateType = initialState,
  action: AnyAction,
) {
  switch (action.type) {
    case SIGNIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SIGNIN_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
      };
    }
    case SIGNIN_ERROR: {
      return {
        ...state,
        success: false,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default SingInReducer;
