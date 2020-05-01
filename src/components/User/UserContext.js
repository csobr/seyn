import React, {useState, useContext, createContext} from 'react';
import UserApi from './UsersHook';

const CurrentUser = createContext(null);

const UserInfo = () => {
  const user = useContext(CurrentUser);
  const {users} = UserApi();
  const [u, setUser] = useState(users);
  return <>{u.map(uid => uid.id)}</>;
};
export default UserInfo;
