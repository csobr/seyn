import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = React.useState(null);
  const [isError, setError] = React.useState('');
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isError,
        setError,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            switch (e.code) {
              case 'auth/email-already-in-use':
                setError('Email already in use.');
                break;
              case 'auth/wrong-password':
                setError('Invalid');
                break;
              case 'auth/invalid-email':
                setError('Invalid email.');
                break;
              case 'auth/user-not-found':
                setError('Account does not exist.');
                break;
            }
            console.log(e.code);
          }
        },
        register: async (email, password, name, newUser) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(userName => {
                userName.user.updateProfile({displayName: name}).then(() => {
                  firestore()
                    .collection('users')
                    .add({
                      userDetails: newUser,
                    });
                });
              })
              .then(() => {
                console.log('User added!');
              });
          } catch (e) {
            switch (e.code) {
              case 'auth/email-already-in-use':
                setError('Email already in use.');
                break;
              case 'auth/wrong-password':
                setError('Invalid');
                break;
              case 'auth/invalid-email':
                setError('Invalid email.');
                break;
              case 'auth/user-not-found':
                setError('Account does not exist.');
                break;
            }
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
        forgotPassword: async email => {
          try {
            await auth().sendPasswordResetEmail(email);
            setError('');
          } catch (e) {
            switch (e.code) {
              case 'auth/invalid-email':
                setError('Invalid email.');
                break;
              case 'auth/user-not-found':
                setError('There is no account with that email address.');
                break;
            }

            console.log(e.code);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
