//Import libraries to create components

import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/header'

//Create component
const App = () => {
    return (
      <View>
        <Header />
        <Text>
          Welcome to Roberto!
        </Text>
      </View>
    );
};

AppRegistry.registerComponent('albums', () => App);
