import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  MessageScreen,
  SearchScreen,
  MapsScreen,
  ProfileScreen,
  SettingsScreen,
} from '../../Screens';
import Icon from '../../constants/Icons';
import Colors from '../../styles/Colors';
import {Image, StyleSheet} from 'react-native';

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
const TabBarIcon = (tintColor: string): React.ReactElement => {
  return <Icon size={29} color={tintColor} name="Home" />;
};

function TabNavigator(): React.ReactElement {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: ({color}): React.ReactElement => TabBarIcon(color),
      }}
      tabBarOptions={{
        activeTintColor: Colors.grey,
        inactiveTintColor: Colors.dark,
        showLabel: false,
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
          tabBarIcon: ({}) => (
            <Image source={require('./icon/seyn.png')} style={styles.icon} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Maps',
          tabBarIcon: ({color, size}) => (
            <Icon name="map" color={color} size={size} />
          ),
        }}
        name="Maps"
        component={MapsScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => (
            <Icon name="chat" color={color} size={size} />
          ),
        }}
        name="Message"
        component={MessageScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

const AppNavigation: React.FC = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        // gestureEnaled: true,
        // gesturedirection: 'horizontal',
        headerStyle: {
          backgroundColor: Colors.home,
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
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Maps" component={MapsScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
