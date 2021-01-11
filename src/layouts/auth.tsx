import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }
    body {
        background: ${(props: any) => props.theme.palette.background}
    }
`;

const Root = styled.div`
  max-width: 520px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
`;

type AuthChildrenType = {
  children: React.ReactNode;
};

const Auth = ({ children }: AuthChildrenType) => {
  return (
    <Root>
      <GlobalStyle />
      {children}
    </Root>
  );
};

export default Auth;
