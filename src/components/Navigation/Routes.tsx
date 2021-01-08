import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthNavigation';
import AppNavigation from './AppNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {
  getUserById,
  setLoading,
  setNeedVerification,
} from '../../store/auth/action';
import Loading from '../../constants/Loading';
import auth from '@react-native-firebase/auth';

export default function Routes() {
  const {authenticated} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const {loading} = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setLoading(true));

        await dispatch(getUserById(user.uid));
        if (!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {authenticated ? <AppNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
}
