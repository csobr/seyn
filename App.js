import React from 'react';
import {CurrentUser, UserInfo} from './src/components/User/UserContext';
import AppNavigation from './src/components/Navigation/AppNavigation';

const App = () => {
  return (
    <>
      <CurrentUser.Provider value={'user'}>
        <AppNavigation />
      </CurrentUser.Provider>
    </>
  );
};
export default App;
