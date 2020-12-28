import React from 'react';
import { useSelector } from 'react-redux';
import Routes from 'routes/index';
import { Helmet } from 'react-helmet'
// import 'fontsource-roboto';

function App() {
  // const theme = useSelector((state) => state.themeReducer)
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s" />
      
    </React.Fragment>
  );
}

export default App;
