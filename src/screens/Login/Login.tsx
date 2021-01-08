import React, {FormEvent} from 'react';
import {
  Form,
  FormInput,
  FormButton,
  ErrorMessage,
  PasswordInput,
} from '../../components/Form/index';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import {NavProps} from '../Home/Home';
import Colors from '../../styles/Colors';
import * as yup from 'yup';
import {Type} from '../../styles/Font';
import {setError, signin} from '../../store/auth/action';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';

type FormValues = {
  email: string;
  password: string;
};

interface OtherProps {
  navigation: NavProps;
}

const loginSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required(),

  password: yup
    .string()
    .min(6, 'Password must have at least 6 characters')
    .required(),
});

const Login = (props: OtherProps & FormValues) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {navigation} = props;
  const initialValues: FormValues = {email: '', password: ''};
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();
  const {error} = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
    };
  }, [error, dispatch]);

  const submitHandler = (email, password) => {
    setLoading(true);
    dispatch(signin({email, password}, () => setLoading(false)));
  };

  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign in</Text>
        <Form
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values) => submitHandler(values.email, values.password)}>
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
                error={(touched.email && errors.email) || ''}
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
                titleName={'Sign In'}
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </React.Fragment>
          )}
        </Form>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.lightText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomText}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.darkText}>Create account</Text>
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
    bottom: 90,
  },
});
export default Login;
