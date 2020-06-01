import React from 'react';
import {CurrentUser} from './src/components/User/UserContext';
import UsersApi from './src/components/User/UsersHook';
import AppNavigation from './src/components/Navigation/AppNavigation';

const App: React.FC = ({}) => {
  // const usersReducer = (state, action) => {
  //   switch (action.type) {
  //     case 'SHOW_ALL':
  //       return 'ALL';
  //     case 'SHOW_ACTIVE':
  //       return 'ACTIVE';
  //     case 'SHOW_OFFLINE':
  //       return 'OFFLINE';
  //     default:
  //       throw Error();
  //   }
  // };
  const [{data}] = UsersApi();

  // const [filter, dispatchFilter] = React.useReducer(usersReducer, 'ALL');

  return (
    <>
      <CurrentUser.Provider value={data}>
        <AppNavigation />
      </CurrentUser.Provider>
    </>
  );
};
export default App;
