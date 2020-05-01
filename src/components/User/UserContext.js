import React, {useState, useContext, Fragment, createContext} from 'react';
import {Text} from 'react-native';
import UserApi from './UsersHook';

const CurrentUser = createContext(null);

const UserInfo = ({id, name, title, image, transport}) => {
  const user = useContext(CurrentUser);
  const {users} = UserApi();
  const [u, setUser] = useState(users);
  return (
    <React.Fragment>
      {u.map(uid => (
        <Text key={uid.id} />
      ))}
    </React.Fragment>
  );
};
export default UserInfo;
