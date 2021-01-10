import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  jssPreset,
} from '@material-ui/core/styles';
import { create } from 'jss';

import Routes from 'routes/index';
import createTheme from './theme';
import { InitialThemeStateType } from 'store/reducers/themeReducer';

const jssHtml = document.getElementById('jss-insertion-point') ?? undefined;
const jss = create({
  ...jssPreset(),
  insertionPoint: jssHtml,
});

function App() {
  const theme: InitialThemeStateType = useSelector(
    (state: any) => state.themeReducer,
  );

  return (
    <React.Fragment>
      <Helmet titleTemplate="%s" />
      <CssBaseline />
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={createTheme(theme.currentTheme)}>
          <ThemeProvider theme={createTheme(theme.currentTheme)}>
            <Routes />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
}

export default App;
