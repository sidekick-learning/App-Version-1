import React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import Canvas from '../Canvas'

export default class SignInScreen extends React.Component{
  
  static navigationOptions = {
    title: 'Please Sign In',
  };

  constructor(props){
    super(props);

    this.state = {
      Identikey: null
    }
  }

  
  //not secure, testing purposes only, try using react native keychain instead
  //Async storage saves raw text into the phone memory
  _signInAsync = async () => {
    await AsyncStorage.setItem(this.state.Identikey);
  };


  render(){
    return (
          <View style={styles.container}>
            <TextInput style={styles.textInput}
            onChangeText={(Identikey)=> this.setState({Identikey})}
            value={this.state.Identikey}
            placeholder='Identikey'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>
            </TextInput>
            <Button title="Sign in!" onPress={() => this.props.navigation.navigate('Home')} />
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
        zIndex: 0,
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
        paddingTop:5,
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
    