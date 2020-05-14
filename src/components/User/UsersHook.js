import React, {useState, useEffect} from 'react';
import initialData from './Users.json';
import axios from 'axios';

const UserApi = () => {
  const [users, setUsers] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  useEffect(() => {
    const requestUser = async () => {
      setLoading(true);
      setError(false);

      try {
        const result = await axios.get().then(res => setUsers(result.res));
      } catch (error) {
        setError(true);
        // console.error('Failed to load users');
      }

      setLoading(false);
    };
    requestUser();
  }, [users]);
  return [{users, loading, isError}];
};
export default UserApi;
