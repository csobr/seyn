import React, {useState, useContext, Fragment} from 'react';
import {Text} from 'react-native';
import UserApi from '../components/UsersHook';

const CurrentUser = () => {
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
export default CurrentUser;
