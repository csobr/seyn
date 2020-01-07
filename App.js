import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Home, Message, Search, Maps, Settings} from './src/components/screens';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={25} color={tintColor} />
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="search" size={25} color={tintColor} />
        ),
      },
    },
    Locate: {
      screen: Maps,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="map-pin" size={25} color={tintColor} />
        ),
      },
    },
    Message: {
      screen: Message,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="message-circle" size={25} color={tintColor} />
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="settings" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        showLabel: false,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
        borderTopColor: 'transparent',
        shadowOpacity: 0.25,
        shadowRadius: 3,
        shadowColor: '#000',
        shadowOffset: {height: 1, width: 0},
      },
      activeTintColor: '#FF385A',
      inactiveTintColor: '#000',
      showLabel: false,
    },
  },
);

export default createAppContainer(TabNavigator);
