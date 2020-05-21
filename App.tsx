import * as React from 'react';
import {CurrentUser} from './src/components/User/UserContext';
import AppNavigation from './src/components/Navigation/AppNavigation';

const App: React.FC = ({}) => {
  return (
    <>
      <CurrentUser.Provider value={{name: 'Annie'}}>
        <AppNavigation />
      </CurrentUser.Provider>
    </>
  );
};
export default App;
