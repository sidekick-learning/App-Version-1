import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class TasksScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
  };

  render() {
    return (
        <Text style={styles.container}>
          text
        </Text>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
  },
});
