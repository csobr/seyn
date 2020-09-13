import React from 'react';
import {
  Form,
  FormInput,
  FormButton,
  ErrorMessage,
  PasswordInput,
} from '../../components/Form/index';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import {AuthContext} from '../../components/Auth/AuthProvider';
import {NavProps} from '../Home/Home';
import Colors from '../../styles/Colors';
import * as yup from 'yup';
import value from '*.json';

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

  const {login} = React.useContext(AuthContext);

  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <Form
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={values => login(values.email, values.password)}>
          {({
            errors,
            touched,
            isValid,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <React.Fragment>
              <ErrorMessage
                error={touched.email && errors.email}
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
