import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { CardSection, Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: '',
      authDomain: 'auth-21011.firebaseapp.com',
      databaseURL: 'https://auth-21011.firebaseio.com',
      storageBucket: 'auth-21011.appspot.com',
      messagingSenderId: '293141528103'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <CardSection>
          {this.renderContent()}
        </CardSection>
      </View>
    );
  }
}

export default App;
