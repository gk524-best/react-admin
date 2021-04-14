import React, { useState, useEffect } from 'react';
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
import { useHistory } from 'react-router-dom';

import { signInAction } from '@/redux/actions/SignInAction';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppAction, AppState } from '@/redux/Store';

/**声明**/
export interface SingInValues {
  username: string;
  password: string;
  isRemember: boolean;
}

interface SignInState extends SingInValues {
  showPassword: boolean;
}

type Props = LinkStateProp & LinkDispatchProp;

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;
  ${(props) => props.theme.breakpoints.up('md')} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

const SignIn: React.FC<Props> = (props) => {
  const [signInValues, setSignInValues] = useState<SignInState>({
    username: '',
    password: '',
    isRemember: false,
    showPassword: false,
  });

  const history = useHistory();
  useEffect(() => {
    if (props.loginStatus) {
      history.push('/dashboard');
    }
  }, [props.loginStatus]);

  const initialValues: SingInValues = {
    username: '',
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

  const hadnleSubmit = (values: SingInValues) => {
    console.log(props);
    props.signIn(values);
    // console.log(props);
    // props.login(values);
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
          username: Yup.string()
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
                error={Boolean(touched.username && errors.username)}
                helperText={touched.username && errors.username}
                id="signIn-amount"
                name="username"
                label="账号"
                variant="outlined"
                type="text"
                value={values.username}
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
              disabled={props.loading}
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

interface LinkStateProp {
  loading: boolean;
  loginStatus: boolean;
}

interface LinkDispatchProp {
  signIn: (values: SingInValues) => void;
}

const mapStateToProps = (state: AppState) => {
  const { signIn } = state;
  return {
    loading: signIn.loading,
    loginStatus: signIn.success,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) =>
  bindActionCreators(
    {
      signIn: (values: SingInValues) => signInAction(values),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
