import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ViewTaskScreen from '../screens/ViewTaskScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const ViewTaskStack = createStackNavigator({
  ViewTask: ViewTaskScreen,
});

ViewTaskStack.navigationOptions = {
  tabBarLabel: 'Tasks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const AddTaskStack = createStackNavigator({
  AddTask: AddTaskScreen,
});

AddTaskStack.navigationOptions = {
  tabBarLabel: 'Add a Task',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  ViewTaskStack,
  AddTaskStack,
});
