// import libraries to help create a component

import React from 'react';
import { AppRegistry } from 'react-native'
import Header from './src/components/Header'

// create app component

const App = () => {
  return (
    <Header headerText="Authentication"/>
  );
};


// render it to the device

AppRegistry.registerComponent('auth', () => App)