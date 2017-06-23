/* import statements */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAPxEzggYmoxp3EcKdm75Hw_os87atV8ig',
            authDomain: 'auth-4c0ef.firebaseapp.com',
            databaseURL: 'https://auth-4c0ef.firebaseio.com',
            projectId: 'auth-4c0ef',
            storageBucket: 'auth-4c0ef.appspot.com',
            messagingSenderId: '883665500528'
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text> Hello App </Text>
            </View>
        );
    }
}

export default App;
