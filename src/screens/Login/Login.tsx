import React from 'react';
import {
  Form,
  FormInput,
  FormButton,
  ErrorMessage,
  PasswordView,
} from '../../components/Form/index';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import {AuthContext} from '../../components/Auth/AuthProvider';
import {NavProps} from '../Home/Home';
import Colors from '../../styles/Colors';
import * as yup from 'yup';
import {FormikProps} from 'formik';

type FormValues = {
  email: string;
  password: string;
};

interface OtherProps {
  navigation: NavProps;
}
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required(),

  password: yup
    .string()
    .min(6, 'Password must have at least 6 characters')
    .required(),
});

const Login = (props: OtherProps & FormValues) => {
  const {navigation} = props;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const initialValues: FormValues = {email: '', password: ''};

  const {login} = React.useContext(AuthContext);
  async function onSubmit() {
    try {
      await login(email, password);
    } catch (error) {
      setLoginError(error.code);
    }
  }

  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <Form
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={onSubmit}>
          {({touched, errors, isValid, handleSubmit}) => (
            <React.Fragment>
              <ErrorMessage
                error={touched.email && errors.email}
                visible={false}
              />

              <FormInput
                placeholder={'Email'}
                value={email}
                autoFocus={true}
                autoCompleteType={'email'}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize={'none'}
                onChangeText={text => setEmail(text)}
              />
              <ErrorMessage
                error={touched.password && errors.password}
                visible={false}
              />
              <PasswordView
                placeholder={'Password'}
                value={password}
                onChangeText={userPassword => setPassword(userPassword)}
              />
              <FormButton
                titleName={'Login'}
                disabled={isValid}
                onPress={handleSubmit}
              />
            </React.Fragment>
          )}
        </Form>
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
    fontFamily: 'Futura',
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
