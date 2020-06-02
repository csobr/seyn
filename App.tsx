import React from 'react';
import {CurrentUser} from './src/components/User/UserContext';
import UsersApi from './src/components/User/UsersHook';
import AppNavigation from './src/components/Navigation/AppNavigation';
import {SignUpScreen} from './src/screens';
// import auth from '@react-native-firebase/app';

const App: React.FC = ({}) => {
  // const user = auth().CurrentUser;
  const [{data}] = UsersApi();
  const activeReducer = (state, action) => {
    switch (action.type) {
      case 'SHOW_ACTIVE':
        return 'ACTIVE';
      case 'SHOW_NOTACTIVE':
        return 'NOTACTIVE';
      default:
        throw Error();
    }
  };

  const [filter, dispatchFilter] = React.useReducer(activeReducer, 'ACTIVE');
  const filterActive = data.filter(el => {
    if (filter === 'ACTIVE' && el.active === true) {
      return true;
    }
    if (filter === 'NOTACTIVE' && !el.active === false) {
      return true;
    }
    return false;
  });

  return (
    <>
      <CurrentUser.Provider value={filterActive}>
        <SignUpScreen />
        <AppNavigation />
      </CurrentUser.Provider>
    </>
  );
};
export default App;
