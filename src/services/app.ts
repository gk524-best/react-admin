import { post } from 'utils/request';
import { SingInValues } from 'pages/Login';

export const login = (postData: SingInValues) => {
  return post('/login', {
    body: postData,
  });
};
