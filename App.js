import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Feed from './components/Feed';
import Search from './components/Search';
import Maps from './components/Maps';
import Message from './components/Message';
import Settings from './components/Settings';
const TabNavigator = createBottomTabNavigator({
  Home: Feed,
  Search: Search,
  Maps: Maps,
  Message: Message,
  Settings: Settings,
});

export default createAppContainer(TabNavigator);
