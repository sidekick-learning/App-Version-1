import React from 'react';
import {
  TextInput,
  Text,
} from 'react-native';
import Canvas from '../Canvas'

export default class SignInScreen extends React.Component{

    static navigationOptions = {
        title: 'Please sign in',
      };
    
      render() {
        return (
          <View style={styles.container}>
            <TextInput style={styles.textInput}
            onChangeText={(userInput)=> this.setState({userInput})}
            value={this.state.userInput}
            placeholder='Enter Identikey'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>
            </TextInput>
            <Button title="Sign in!" onPress={this.signIn} />
          </View>
        );
      }
    
      //not secure, testing purposes only, try using react native keychain instead
      //Async storage saves raw text into the phone memory
      _signInAsync = async () => {
        await AsyncStorage.setItem(this.state.userInput);
        Canvas.callCanvas;
      };


    }