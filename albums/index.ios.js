//Import libraries to create components

import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

//Create component
const App = () => {
    return (
      <View>
        <Header headerText={'Albums'}/>
        <AlbumList />
      </View>
    );
};

AppRegistry.registerComponent('albums', () => App);
