import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, TabNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';

export const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Tasks',
  TabBarIcon: ({ focused }) => (
    <tabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-calendar': 'md-calendar'
      }
    />
  ),
};

/*
const ProgressStack = createStackNavigator({
  Links: ProgressScreen,
});

ProgressStack.navigationOptions = {
  tabBarLabel: 'Progress',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-clipboard' : 'md-clipboard'}
    />
  ),
};

const PrioritizerStack = createStackNavigator({
  Settings: PrioritizerScreen,
});

PrioritizerStack.navigationOptions = {
  tabBarLabel: 'prioritizer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'}
    />
  ),
};
*/

export default createBottomTabNavigator({
  HomeStack,
  //ProgressStack,
  //PrioritizerStack,
});