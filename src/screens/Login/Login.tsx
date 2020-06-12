import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import FormInput from '../../components/Form/FormInput';
import {AuthContext} from '../../components/Auth/AuthProvider';
import {NavProps} from '../Home/Home';
import FormButton from '../../components/Form/FormButton';
import Colors from '../../styles/Colors';

type Props = {
  navigation: NavProps;
};

const Login = ({navigation}: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {login, isError} = React.useContext(AuthContext);

  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <Text style={styles.error}>{isError}</Text>
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
        <FormButton
          titleName={'Login'}
          onPress={() => login(email, password)}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.lightText}>
            New? <Text style={styles.darkText}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomText}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text styles={styles.lightText}>Forgot Password?</Text>
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
    fontSize: 28,
    paddingBottom: 20,
    fontWeight: '700',
  },
  lightText: {
    color: Colors.grey,
  },
  darkText: {
    color: Colors.dark,
  },
  error: {
    color: 'red',
    fontSize: 11,
  },
  bottomText: {
    position: 'absolute',
    bottom: 70,
  },
});
export default Login;
