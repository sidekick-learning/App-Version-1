import React from 'react';
import {
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Schedule',
  };

  render() {
    return (
      <View style={styles.container}>
      <ScrollView style = {styles.scrollcontainer}>
      <TextInput
      style={styles.textInput}
      placeholder='Write a Task to add'
      placeholderTextColor='white'
      underlineColorAndroid='transparent'>
      </TextInput>
      </ScrollView>
      <View style={styles.footer}>
      </View>
      <TouchableOpacity style={styles.addButton}>
       <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollcontainer: {
    flex:1,
    marginBottom:100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput:{
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
    },
  addButton:{
    marginBottom:25,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:15,
    marginRight:15,
    backgroundColor: '#ff7034',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff'
  },
  addButtonText: {
    color:'#fff',
    fontSize: 24,
  },
});
