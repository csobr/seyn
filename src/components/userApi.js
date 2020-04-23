import React, {useState, useEffect} from 'react';
import UserData from '../constants/User.json';

const UserApi = () => {
  const [users, setUsers] = useState(UserData);
  useEffect(() => {
    const requestUser = async () => {
      const result = await fetch(users)
        .then(data => {
          setUsers(result.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    requestUser();
  }, [users]);
  return [{users}];
};
export default UserApi;
