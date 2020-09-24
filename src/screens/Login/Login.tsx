import React from 'react';
import {
  Form,
  FormInput,
  FormButton,
  ErrorMessage,
  PasswordInput,
} from '../../components/Form/index';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import {AuthContext} from '../../components/Auth/AuthProvider';
import {NavProps} from '../Home/Home';
import Colors from '../../styles/Colors';
import * as yup from 'yup';
import {getFirebaseMessage} from '../../components/Form/ErrorCodes';
import {Type} from '../../styles/Font';

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
  const initialValues: FormValues = {email: '', password: ''};
  const [isError, setError] = React.useState('');

  const {login} = React.useContext(AuthContext);

  async function handleSubmit(email, password) {
    try {
      await login(email, password);
    } catch (error) {
      setError(getFirebaseMessage(error.code));
    }
  }
  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <Form
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={values => handleSubmit(values.email, values.password)}>
          {({
            errors,
            touched,
            isValid,
            values,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <React.Fragment>
              <ErrorMessage
                error={(touched.email && errors.email) || isError}
                visible={false}
              />
              <FormInput
                placeholder={'Email'}
                value={values.email}
                autoFocus={true}
                autoCompleteType={'email'}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize={'none'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              <ErrorMessage
                error={touched.password && errors.password}
                visible={false}
              />
              <PasswordInput
                placeholder={'Password'}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />

              <FormButton
                titleName={'Login'}
                disabled={!isValid}
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
    height: '100%',
  },
  title: {
    fontSize: 28,
    paddingBottom: 35,
    fontWeight: '700',
    fontFamily: Type.title,
  },
  lightText: {
    color: Colors.primary,
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
