import {createStackNavigator} from 'react-navigation-stack';
import {Profile} from './src/components/screens';

const AppNavigator = createStackNavigator({
  Profile: {screen: Profile},
});

export default AppNavigator;
