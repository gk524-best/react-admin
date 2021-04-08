import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {
  Checkbox,
  Paper,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { login } from '@/services/app';

/**声明**/
export interface SingInValues {
  amount: string;
  password: string;
  isRemember: boolean;
}

interface SignInState extends SingInValues {
  showPassword: boolean;
}

interface SignInProps {
  dispath: () => void;
}

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;
  ${(props) => props.theme.breakpoints.up('md')} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

const SignIn: React.FC<SignInProps> = (props) => {
  const [signInValues, setSignInValues] = React.useState<SignInState>({
    amount: '',
    password: '',
    isRemember: false,
    showPassword: false,
  });

  const initialValues: SingInValues = {
    amount: '',
    password: '',
    isRemember: false,
  };

  const handleClickShowPswd = () => {
    setSignInValues({
      ...signInValues,
      showPassword: !signInValues.showPassword,
    });
  };

  const handleMouseDownPswd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const hadnleSubmit = (
    values: SingInValues,
    { setSubmitting }: FormikHelpers<SingInValues>,
  ) => {
    const { dispath } = props;
    login(values).subscribe((res) => {
      console.log(res);
    });
    // if (values.amount === 'admin' && values.password === '123456') {
    //   setTimeout(() => {
    //     setSubmitting(false);
    //   }, 1000);
    // }
  };

  return (
    <Wrapper>
      <Helmet title="登陆系统"></Helmet>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        用户登陆
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={hadnleSubmit}
        validationSchema={Yup.object({
          amount: Yup.string()
            .min(4, '最少4个字符')
            .max(15, '最多不超过15个字符')
            .required('必须'),
          password: Yup.string()
            .min(6, '最少6个字符')
            .max(15, '最多15个字符')
            .required('必须'),
        })}>
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            {/* 账号 */}
            <FormControl fullWidth margin="normal" variant="outlined">
              <TextField
                error={Boolean(touched.amount && errors.amount)}
                helperText={touched.amount && errors.amount}
                id="signIn-amount"
                name="amount"
                label="账号"
                variant="outlined"
                type="text"
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>
            {/* 密码 */}
            <FormControl fullWidth margin="normal" variant="outlined">
              <TextField
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                id="signIn-password"
                name="password"
                label="密码"
                variant="outlined"
                type={signInValues.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="是否显示密码"
                        onClick={handleClickShowPswd}
                        onMouseDown={handleMouseDownPswd}
                        edge="end">
                        {signInValues.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            {/* 记住我 */}
            <FormControlLabel
              label="记住我"
              control={
                <Checkbox
                  name="isRemember"
                  checked={values.isRemember}
                  value={values.isRemember}
                  color="primary"
                  onChange={handleChange}
                />
              }
            />
            {/* 提交 */}
            <Button
              color="primary"
              disabled={isSubmitting}
              fullWidth
              variant="contained"
              type="submit">
              登 陆
            </Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SignIn;
