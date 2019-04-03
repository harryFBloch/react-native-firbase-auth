import React, { Component } from 'react'
import {Text} from 'react-native'
import firebase from 'firebase'
import { CardItem, Button, Card, ForumInput, Spinner} from './common'


export default class LoginForm extends Component {

  constructor(){
    super()
    this.state = {email: "", password: "", error: "", loading: false}
  }

  onButtonPress = () => {
    this.setState({ error: "", loading: true})
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess)
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(this.onLoginFail)
    })
  }

  onLoginSuccess = () => {
    console.log("success")
    this.setState({email: "", password: "", loading: false, error: ""})
  }

  onLoginFail = () => {
    this.setState({loading: false, error: "Authentication Failed"})
  }

  renderButton= () => {
    if (this.state.loading) {
      return <Spinner size="small"/>
    }else{
      return (
        <Button text="Log In / Sign Up" fireButton={this.onButtonPress} />
      )
    }
  }

  render(){
    return (
      <Card>

        <CardItem >
          <ForumInput label="Email:" value={this.state.email}
          placeholder="user@gmail.com"
           onChangeText={email => this.setState({ email })}/>
        </CardItem>

        <CardItem >
          <ForumInput label="Password:" value={this.state.password}
          placeholder="password" secureTextEntry={true}
           onChangeText={password => this.setState({ password })}/>
        </CardItem>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardItem>
          {this.renderButton()}
        </CardItem>

      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
