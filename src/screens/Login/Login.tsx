import React from 'react';
import {View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import FormInput from '../../components/Form/FormInput';
import {AuthContext} from '../../components/Auth/AuthProvider';
import {NavProps} from '../Home/Home';

type Props = {
  navigation: NavProps;
};

const Login = ({navigation}: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {login} = React.useContext(AuthContext);
  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <FormInput
          placeholderText={'Email'}
          labelValue={email}
          autoCapitalize={'none'}
          onChangeText={userEmail => setEmail(userEmail)}
        />
        <FormInput
          placeholderText="Password"
          labelValue={password}
          secureTextEntry={true}
          onChangeText={userPassword => setPassword(userPassword)}
        />
        <Button title="Login" onPress={() => login(email, password)} />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text>Sign up</Text>
        </TouchableOpacity>
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
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: '600',
  },
});
export default Login;
