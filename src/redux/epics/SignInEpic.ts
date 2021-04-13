import { Observable } from 'rxjs';
import { ofType, ActionsObservable, Epic } from 'redux-observable';
import { switchMap, filter, map, mapTo } from 'rxjs/operators';
import { ActionCreator } from 'typesafe-actions';
import { of } from 'rxjs';

import message from 'utils/message';
import { tokenStorage } from 'utils/storage';
import { userLogin } from 'services/app';
import actions, {
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
} from '../actions/SignInAction';
import { RootState } from '../reducers/RootReducer';
import { AjaxResponse } from 'rxjs/ajax';

console.log(actions);

// type AllActions = ActionCreator<typeof actions>;

// t;ype Action = ActionType<typeof signInAction>

const loginEpic: Epic = (action$: Observable<any>) => {
  const response$ = action$.pipe(
    ofType(SIGNIN),
    switchMap((action) => {
      console.log(action);
      actions.signInLoading();
      const values = {
        ...action.payload,
      };
      return userLogin(values);
    }),
  );

  response$.subscribe((res: App.Response) => {
    if (res.status) {
      tokenStorage.set(res.data);
      message.success('登录成功');
      return mapTo(SIGNIN_SUCCESS);
      // return actions.signInSuccess();
      // return dispatch({
      //   type: SIGNIN_SUCCESS,
      // });
    } else {
      mapTo(SIGNIN_ERROR);
      // return actions.signInError();
      // return dispatch({
      //   type: SIGNIN_ERROR,
      // });
    }
  });
};

export default [loginEpic];
