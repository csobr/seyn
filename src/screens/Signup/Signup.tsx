import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import FormInput from '../../components/Form/FormInput';
import {AuthContext} from '../../components/Auth/AuthProvider';
import {User} from '../../types/user';
import FormButton from '../../components/Form/FormButton';
import {ErrorMessage} from '../../components/Form';

const SignUp = ({}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const newUser = {
    name: name,
    email: email,
    profileImg: null,
    transport: null,
    time: null,
    active: false,
    status: null,
  };
  const userInfo: User = newUser;
  // //Add  sec
  const {register, isError} = React.useContext(AuthContext);

  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <ErrorMessage errorText={isError} />
        <FormInput
          placeholder="Full Name"
          onChangeText={userName => setName(userName)}
          autoFocus={true}
          autoCorrect={false}
        />
        <FormInput
          placeholder="Email"
          onChangeText={userEmail => setEmail(userEmail)}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize={'none'}
        />
        <FormInput
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          autoCapitalize={'none'}
          onChangeText={userPassword => setPassword(userPassword)}
        />
        <FormButton
          titleName="Sign Up"
          onPress={() => register(email, password, name, userInfo)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: '700',
  },
});
export default SignUp;
