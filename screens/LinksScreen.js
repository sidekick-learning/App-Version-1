import React from 'react';
import { ScrollView, StyleSheet, View, Button, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import Thing from '../components/thing';


export default class DustinsScreen extends React.Component {

_onPressButton() {
  Alert.alert('yo')
  Thing.changeState()
  }

  render() {

  return (
    <View>
    <Button
    onPress={this._onPressButton}
    title = "press"
    />

      <View style={styles.container}>
        <Thing message = 'shit'/>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
  },
})

/*
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  TextInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: 'blue',
  },
*/