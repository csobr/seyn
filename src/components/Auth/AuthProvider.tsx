import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = React.useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
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
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
