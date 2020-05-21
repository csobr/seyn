import React from 'react';
import initialData from './Users.json';
// import axios from 'axios';

const UserApi = () => {
  const [users, setUsers] = React.useState(initialData);
  const [loading, setLoading] = React.useState(false);
  const [isError, setError] = React.useState(false);
  React.useEffect(() => {
    const requestUser = async () => {
      setLoading(true);
      setError(false);

      // try {
      //   const result = await axios.get().then(res => setUsers(result.res));
      // } catch (error) {
      //   setError(true);
      //   // console.error('Failed to load users');
      // }
      setUsers(users);

      setLoading(false);
    };
    requestUser();
  }, [users]);
  return [{users, loading, isError}];
};
export default UserApi;
