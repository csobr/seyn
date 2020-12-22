import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthNavigation';
import AppNavigation from './AppNavigation';
import {AuthContext} from '../Auth/AuthProvider';
import Loading from '../../constants/Loading';

export default function Routes() {
  const {user, setUser} = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(true);
  const [initializing, setInitializing] = React.useState(true);
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
      setLoading(false);
    }
  }
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {user ? <AppNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
}
