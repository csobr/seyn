import React, {useState, useContext, createContext} from 'react';
import {Text} from 'react-native';
import UserApi from './UsersHook';

export const CurrentUser = createContext(null);

// const UserInfo = () => {
//   const [{users}] = UserApi();
//   const [u, setUser] = useState(users);

//   return (
//     <>
//       {u.map(uid => (
//         <Text key={uid.id} />
//       ))}
//     </>
//   );
// };
