
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase'
import {Header} from './components/common'
import LoginForm from './components/LoginForm'


export default class App extends Component {

componentWillMount(){
  firebase.initializeApp({
    apiKey: "AIzaSyCuQzy3ahB_LI6NxRzAHc6Sok1C_SvP9iY",
    authDomain: "reactnativeauth-5970f.firebaseapp.com",
    databaseURL: "https://reactnativeauth-5970f.firebaseio.com",
    projectId: "reactnativeauth-5970f",
    storageBucket: "reactnativeauth-5970f.appspot.com",
    messagingSenderId: "998108744483"
  })
}

  render() {
    return (
      <View >
        <Header headerText="HelloWorld!!!"/>
        <LoginForm/>
      </View>
    )
  }
}
