import React from 'react';
import { Provider } from 'react-redux';
import Providers from './src/components/Navigation/index';
import store from './src/store/auth';

const App:React.FC = ({}) => {
  return (
    <Provider store={store}>
      <Providers/>
   </Provider>
 )
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
