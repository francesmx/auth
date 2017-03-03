import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import FIREBASE_API_KEY from '../config';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: FIREBASE_API_KEY,
      authDomain: 'auth-21011.firebaseapp.com',
      databaseURL: 'https://auth-21011.firebaseio.com',
      storageBucket: 'auth-21011.appspot.com',
      messagingSenderId: '293141528103'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
