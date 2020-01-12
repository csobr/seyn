import React, {Component} from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Message,
  Search,
  Maps,
  Settings,
  Profile,
} from './src/components/screens';
import Icon from 'react-native-vector-icons/Feather';
import Colors from './src/constants/Colors';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Search':
      return 'Search';
    case 'Maps':
      return 'Maps';
    case 'Message':
      return 'Message';
    case 'Settings':
      return 'Settings';
  }
}
const HomeTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Search') {
          iconName = 'search';
        } else if (route.name === 'Maps') {
          iconName = 'map-pin';
        } else if (route.name === 'Message') {
          iconName = 'message-circle';
        } else if (route.name === 'Settings') {
          iconName = 'settings';
        }
        return (
          <Icon
            name={iconName}
            size={25}
            tintColor={{tintColor}}
            focused={focused}
          />
        );
      },
    })}
    tabBarOptions={{
      style: {
        backgroundColor: Colors.white,
        height: 85,
        borderTopColor: 'transparent',
        shadowOpacity: 0.25,
        shadowRadius: 3,
        shadowColor: '#000',
        shadowOffset: {height: 1, width: 0},
      },
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.ligher,
    }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Maps" component={Maps} />
    <Tab.Screen name="Message" component={Message} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export default class App extends Component {
  render() {
    return (
      <NavigationNativeContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnaled: true,
            gesturedirection: 'horizontal',
            headerStyle: {
              backgroundColor: Colors.white,
            },
            headerTintColor: Colors.dark,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            options={({route}) => ({
              title: getHeaderTitle(route),
            })}
            name="Home"
            component={HomeTabNavigator}
          />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Maps" component={Maps} />
          <Stack.Screen name="Message" component={Message} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationNativeContainer>
    );
  }
}
