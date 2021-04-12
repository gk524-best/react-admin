import { ofType, ActionsObservable, Epic } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { ActionType } from 'typesafe-actions';
import { filter } from 'rxjs/operators';

import { userLogin } from 'services/app';
import { SIGNIN } from '../actions/SignInAction';
import { signInAction } from '../actions/SignInAction';

const loginEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType(SIGNIN),
    switchMap((action) => {
      const values = {
        ...action.payload,
      };
      return userLogin(values).subscribe((res: App.Response) => {
        console.log(res);
      })
    }),
  );

export default [loginEpic];
