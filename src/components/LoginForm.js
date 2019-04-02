import React, { Component } from 'react'
import { CardItem, Button, Card, ForumInput} from './common'

export default class LoginForm extends Component {

  constructor(){
    super()
    this.state = {email: ""}
  }

  render(){
    return (
      <Card>
        <CardItem >
          <ForumInput label="Email" value={this.state.email}
          placeholder="user@gmail.com"
           onChangeText={email => this.setState({ email })}/>
        </CardItem>

        <CardItem ></CardItem>
        <CardItem>
          <Button text="Log In / Sign Up" fireButton={() => console.log("Hello World!!!")} />
        </CardItem>
      </Card>
    )
  }
}
