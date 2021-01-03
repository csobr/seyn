import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {getFirebaseMessage} from '../Form/ErrorCodes';
export const AuthContext = React.createContext({});

interface SignUpProps {
  email: string;
  password: string;
  children: any;
}
export const AuthProvider: React.FC<SignUpProps> = ({
  email,
  password,
  children,
}) => {
  const [user, setUser] = React.useState(null);
  const [isError, setError] = React.useState('');
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isError,
        setError,
        login: async (email, password) =>
          await auth().signInWithEmailAndPassword(email, password),

        register: async (email, password, newUser) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then((userName) => {
                userName.user.updateProfile({displayName: email}).then(() => {
                  firestore().collection('users').add({
                    userDetails: newUser,
                  });
                });
              })
              .then(() => {
                console.log('User added!');
              });
          } catch (error) {
            setError(getFirebaseMessage(error.code));
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
        forgotPassword: async () => {
          try {
            await auth()
              .sendPasswordResetEmail(email)
              .then(function (_user) {
                //navigate login
                setError('');
              });
          } catch (e) {
            switch (e.code) {
              case 'auth/invalid-email':
                setError('Please enter an email address.');
                break;
              case 'auth/user-not-found':
                setError('There is no account with that email address.');
                break;
            }

            console.error(e.code);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
