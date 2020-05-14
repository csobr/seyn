import React, {useState, useEffect} from 'react';
import initialData from './User.json';

const UserApi = () => {
  const [users, setUsers] = useState(initialData);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const requestUser = async () => {
      setLoading(true);
      setError(false);
      const result = await fetch(users)
        .then(data => {
          setUsers(result.data);
        })
        .catch(() => setError(true));

      setLoading(false);
    };
    requestUser();
  }, [users]);
  return [{users, loading, error}];
};
export default UserApi;
