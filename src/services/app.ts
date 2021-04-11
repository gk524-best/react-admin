import { post } from 'utils/request';
import { SingInValues } from '@/pages/signIn';

// 登录
export const userLogin = (postData: SingInValues) => {
  return post('/login', {
    body: postData,
  });
};

// 
