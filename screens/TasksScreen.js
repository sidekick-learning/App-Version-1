import React from 'react';
import {
  Text,
  StyleSheet,
  CheckBox,
  View,
  Platform,
  Alert
} from 'react-native';

export default class TasksScreen extends React.Component {
  constructor() {
    super();
    this.state={
      check:false
  }
}
  static navigationOptions = {
    title: 'Tasks',
  };



  render() {
    return (
      <View style={{flexDirection: 'row'}}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() => this.setState({ checked: !this.state.checked })}
          />
          <Text style={{marginTop: 5}}>this is a checkbox</Text>
        </View>
    );
  }
}
