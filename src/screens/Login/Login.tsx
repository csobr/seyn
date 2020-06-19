import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import {FormInput, FormButton, ErrorMessage} from '../../components/Form/index';
import {AuthContext} from '../../components/Auth/AuthProvider';
import {NavProps} from '../Home/Home';
import Colors from '../../styles/Colors';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

type Props = {
  navigation: NavProps;
};
const loginSchema = yup.object().shape({
  email: yup.string(),

  password: yup.string().min(6, 'Password must have at least 6 characters'),
});

const Login = ({navigation}: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const {login} = React.useContext(AuthContext);
  const {register, setValue, handleSubmit, errors} = useForm({
    validationSchema: loginSchema,
  });
  async function onSubmit() {
    try {
      await login(email, password);
    } catch (error) {
      console.log('Submit event', error.message);
      setLoginError(error.message);
    }
  }

  React.useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        {errors.email && <ErrorMessage errorText={errors.email.message} />}
        <FormInput
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder={'Email'}
          value={email}
          autoCapitalize={'none'}
          onChangeText={text => setEmail(text)}
          secureTextEntry={false}
          inputRef={register}
          autoFocus={true}
        />
        {/* {errors.password && (
          <ErrorMessage errorText={errors.password.message} />
        )} */}

        <FormInput
          textContentType="password"
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={userPassword => setPassword(userPassword)}
          inputRef={register}
        />

        <FormButton titleName={'Login'} onPress={handleSubmit(onSubmit)} />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.lightText}>
            New? <Text style={styles.darkText}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomText}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.lightText}>Forgot Password?</Text>
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
  bottomText: {
    position: 'absolute',
    bottom: 70,
  },
});
export default Login;
