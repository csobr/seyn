import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../constants/User.json';

const UserApi = () => {
  const [user, setUser] = React.useState([]);
  const [url, setUrl] = React.useState([]);
  React.useEffect(() => {
    const requestUser = async () => {
      const result = await axios.get('User.json').then();
    };
  });
};
export default UserApi;
