
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Header} from './components/common'

export default class App extends Component {
  render() {
    return (
      <View >
        <Header headerText="HelloWorld!!!"/>
        <Text>An APP!</Text>
      </View>
    )
  }
}
