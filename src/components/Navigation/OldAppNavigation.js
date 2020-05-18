import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Message, Search, Maps, Profile} from '../../screens';
import Settings from '../Settings';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../styles/Colors';
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
    case 'Profile':
      return 'Profile';
    case 'Settings':
      return 'Settings';
  }
}
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        if (route.name === 'Home') {
        } else if (route.name === 'Search') {
        } else if (route.name === 'Maps') {
        } else if (route.name === 'Message') {
        } else if (route.name === 'Profile') {
        }
        return <Icon size={25} color={tintColor} focused={focused} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.dark,
      showLabel: true,
      style: {
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: 'transparent',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowColor: '#000',
        shadowOffset: {height: 1, width: 0},
      },
    }}>
    <Tab.Screen
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({color, size}) => (
          <Icon name="search" color={color} size={size} />
        ),
      }}
      name="Search"
      component={Search}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Maps',
        tabBarIcon: ({color, size}) => (
          <Icon name="map-pin" color={color} size={size} />
        ),
      }}
      name="Maps"
      component={Maps}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Message',
        tabBarIcon: ({color, size}) => (
          <Icon name="message-square" color={color} size={size} />
        ),
      }}
      name="Message"
      component={Message}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <Icon name="user" color={color} size={size} />
        ),
      }}
      name="Profile"
      component={Profile}
    />
  </Tab.Navigator>
);

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnaled: true,
          gesturedirection: 'horizontal',
          headerStyle: {
            backgroundColor: Colors.background,
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
          component={TabNavigator}
        />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
