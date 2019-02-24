import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import TabBarIcon from '../components/TabBarIcon';
import ScheduleScreen from '../screens/ScheduleScreen';
import TasksScreen from '../screens/TasksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const ScheduleStack = createStackNavigator({
  Schedule: ScheduleScreen,
});

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-calendar${focused ? '' : '-outline'}`
          : 'md-calendar'
        Platform.OS === 'ios' ? 'ios-calendar': 'md-calendar'
      }
    />
  ),
};

const TasksStack = createStackNavigator({
  Tasks: TasksScreen,
});

TasksStack.navigationOptions = {
LinksStack.navigationOptions = {

  tabBarLabel: 'Progress',

  tabBarLabel: 'Tasks',

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}

      name={Platform.OS === 'ios' ? 'ios-link' : 'md-checkbox'}
      name={Platform.OS === 'ios' ? 'ios-clipboard' : 'md-clipboard'}

    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'prioritizer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'}
    />
  ),
};

export default createBottomTabNavigator({
  ScheduleStack,
  TasksStack,
  SettingsStack,
});
