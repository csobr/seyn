import {ThunkAction} from 'redux-thunk';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {RootState} from '../index';
import * as Types from './types';

export const signup = (
  data: Types.SignUpData,
  onError: () => void,
): ThunkAction<void, RootState, null, Types.AuthAction> => {
  return async (dispatch) => {
    try {
      const res = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      );
      if (res.user) {
        const userData: Types.User = {
          email: data.email,
          firstName: data.firstName,
          id: res.user.uid,
          createdAt: firestore.FieldValue.serverTimestamp(),
        };
        await firestore().collection('users').doc(res.user.uid).set(userData);
        await res.user.sendEmailVerification();
        dispatch({
          type: Types.NEED_VERIFICATION,
        });
        dispatch({
          type: Types.SET_USER,
          payload: userData,
        });
      }
    } catch (error) {
      console.log(error);
      onError();
      dispatch({
        type: Types.SET_ERROR,
        payload: error.message,
      });
    }
  };
};

export const getUserById = (
  id: string,
): ThunkAction<void, RootState, null, Types.AuthAction> => {
  return async (dispatch) => {
    try {
      const user = await firestore().collection('users').doc(id).get();
      if (user.exists) {
        const userData = user.data() as Types.User;
        dispatch({
          type: Types.SET_USER,
          payload: userData,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setLoading = (
  value: boolean,
): ThunkAction<void, RootState, null, Types.AuthAction> => {
  return async (dispatch) => {
    dispatch({
      type: Types.SET_LOADING,
      payload: value,
    });
  };
};

export const signin = (
  data: Types.SignInData,
  onError: () => void,
): ThunkAction<void, RootState, null, Types.AuthAction> => {
  return async (dispatch) => {
    try {
      await auth().signInWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      console.log(error);
      onError();
      dispatch(setError(error.messagee));
    }
  };
};

export const setError = (
  msg: string,
): ThunkAction<void, RootState, null, Types.AuthAction> => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await auth().signOut();
      dispatch({
        type: Types.SIGN_OUT,
      });
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };
};

export const setNeedVerification = (): ThunkAction<
  void,
  RootState,
  null,
  Types.AuthAction
> => {
  return (dispatch) => {
    dispatch({
      type: Types.NEED_VERIFICATION,
    });
  };
};

export const setSuccess = (
  msg: string,
): ThunkAction<void, RootState, null, Types.AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: Types.SET_SUCCESS,
      payload: msg,
    });
  };
};

export const sendPasswordResetEmail = (
  email: string,
  successMsg: string,
): ThunkAction<void, RootState, null, Types.AuthAction> => {
  return async (dispatch) => {
    try {
      await auth().sendPasswordResetEmail(email);
      dispatch(setSuccess(successMsg));
    } catch (error) {
      console.log(error);
      dispatch(setError(error.message));
    }
  };
};

export const signout = (): ThunkAction<
  void,
  RootState,
  null,
  Types.AuthAction
> => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await auth().signOut();
      dispatch({
        type: Types.SIGN_OUT,
      });
    } catch (error) {
      console.error();
      dispatch(setLoading(false));
    }
  };
};
