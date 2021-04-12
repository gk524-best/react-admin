import { action } from 'typesafe-actions';
import { SingInValues } from '@/pages/signIn';
// import { userLogin } from 'services/app';
// import { Dispatch } from 'redux';
// import { SingInValues } from 'pages/signIn';
// import { tokenStorage } from 'utils/storage';
// import message from 'utils/message';
export const SIGNIN = 'SIGNIN';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_LOADING = 'SIGNIN_LOADING';
export const SIGNIN_ERROR = 'SIGNIN_ERROR';

export const signInAction = (values: SingInValues) => action(SIGNIN, values);

// export function login(values: SingInValues) {
//   return (dispatch: Dispatch) => {
//     debugger;
//     dispatch({
//       type: SIGNIN_LOADING,
//     });
//     debugger;
//     return userLogin(values).subscribe((res: App.Response) => {
//       if (res.status) {
//         tokenStorage.set(res.data);
//         message.success('登录成功');
//         return dispatch({
//           type: SIGNIN_SUCCESS,
//         });
//       } else {
//         return dispatch({
//           type: SIGNIN_ERROR,
//         });
//       }
//     });
//   };
// }
