import { concat, Observable } from 'rxjs';
import { ofType, Epic } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import message from 'utils/message';
import { tokenStorage } from 'utils/storage';
import actions, { SIGNIN } from '../actions/SignInAction';
import { AppAction, AppState } from '../Store';

import { userLogin } from 'services/app';
import { AnyAction } from 'redux';

const loginEpic: Epic<AppAction, AppAction, AppState> = (
  action$: Observable<AppAction>,
) => {
  return action$.pipe(
    ofType(SIGNIN),
    switchMap((action: AnyAction) => {
      const values = {
        ...action.payload,
      };
      return concat(
        of(actions.signInLoading()),
        userLogin(values).pipe(
          map((res: App.Response) => {
            if (res.status) {
              message.success('登录成功');
              tokenStorage.set(res.data);
              // 跳转到首页
              return actions.signInSuccess();
            } else {
              return actions.signInError();
            }
          }),
        ),
      );
    }),
  );
};

export default [loginEpic];
