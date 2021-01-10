import React from 'react';
import { Button, Checkbox, Paper as MuiPaper } from '@material-ui/core';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
      height: 100%;
  }
  body {
      background: ${(props: any) => props.theme.palette.background}
  }
`;

const Wrapper = styled.div`
  max-width: 520px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
`;

const Paper = styled(MuiPaper)`
  padding: ${(props) => props.theme.spacing(6)}px;
  ${(props) => props.theme.breakpoints.up('md')} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

function Login() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <Paper></Paper>
      </Wrapper>
    </React.Fragment>
  );
}

export default Login;
