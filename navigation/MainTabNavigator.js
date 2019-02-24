import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import TabBarIcon from '../components/TabBarIcon';
import AddTaskScreen from '../screens/AddTaskScreen';
import TasksScreen from '../screens/TasksScreen';

const AddTaskStack = createStackNavigator({
  AddTask: AddTaskScreen,
});

AddTaskStack.navigationOptions = {
  tabBarLabel: 'Add a Task',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-calendar${focused ? ' ' : '-outline'}
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
AddTaskStack.navigationOptions = {

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


export default createBottomTabNavigator({
  AddTaskStack,
  TasksStack,
});
