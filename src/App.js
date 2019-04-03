
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase'
import {Header, Button, Spinner, CardItem} from './components/common'
import LoginForm from './components/LoginForm'
import Fkey from './components/fkey'


export default class App extends Component {

  constructor(){
    super()
    this.state = {loggedIn: null}
  }

componentWillMount(){
  firebase.initializeApp(Fkey())
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user, "USER")
    user ? this.setState({loggedIn: true}) : this.setState({loggedIn: false})
    })
}

formOrButton = () => {
  switch(this.state.loggedIn) {
    case true:
      return (<CardItem>
            <Button text="Log Out" fireButton={() => firebase.auth().signOut()}/>
          </CardItem>)
    case false:
      return <LoginForm />
    default:
      return <CardItem><Spinner /></CardItem>
  }
}

  render() {
    return (
      <View >
        <Header headerText="HelloWorld!!!"/>
        {this.formOrButton()}
      </View>
    )
  }
}
