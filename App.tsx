import React from 'react';
import AppNavigation from './src/components/Navigation/AppNavigation';
import {SignUpScreen} from './src/screens';
import {AuthProvider} from './src/components/Auth/AuthProvider';

const App: React.FC = ({}) => {
  // const user = auth().CurrentUser;

  return (
    <>
      <AuthProvider>
        <SignUpScreen />
        <AppNavigation />
      </AuthProvider>
    </>
  );
};
export default App;
//const [{data}] = UsersApi();
// const activeReducer = (state, action) => {
//   switch (action.type) {
//     case 'SHOW_ACTIVE':
//       return 'ACTIVE';
//     case 'SHOW_NOTACTIVE':
//       return 'NOTACTIVE';
//     default:
//       throw Error();
//   }
// };

// const [filter, dispatchFilter] = React.useReducer(activeReducer, 'ACTIVE');
// const filterActive = data.filter(el => {
//   if (filter === 'ACTIVE' && el.active === true) {
//     return true;
//   }
//   if (filter === 'NOTACTIVE' && !el.active === false) {
//     return true;
//   }
//   return false;
// });
