import React from 'react';
import initaldata from './Users.json';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {...state, isLoading: true, isError: false};
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const UsersApi = () => {
  const [state, dispatch] = React.useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initaldata, // replace
  });

  React.useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      // add fetch
      dispatch({type: 'FETCH_INIT'});

      try {
        if (!didCancel) {
          dispatch({type: 'FETCH_SUCCESS', payload: initaldata});
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({type: 'FETCH_FAILURE'});
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, []);

  return [state];
};
export default UsersApi;
