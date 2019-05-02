import React from 'react';
import {
  TextInput,
  Text,
} from 'react-native';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';

//two stack navigators, one containing the authorization flow and one for the actual app itself
const AppStack = createStackNavigator({ Home: {screen: HomeScreen} });
const AuthStack = createStackNavigator({ SignIn: {screen: SignInScreen} });

//uri prefix for oauth2 redirect
const prefix = 'sidekick://';

const App = createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
  ));

const AppNavigator = () =>  <App uriprefix={prefix} />;

export default AppNavigator;